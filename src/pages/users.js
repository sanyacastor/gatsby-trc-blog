import React from "react"
import firebase from "gatsby-plugin-firebase"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Loader from "../components/loader/loader"
import './users.scss'

import { motion } from "framer-motion"

// const appear = {
//   visible: {
//     y: '0px',
//     opacity: 1,
//     transition: {
//       when: "beforeChildren",
//       staggerChildren: 0.4,
//     },
//   },
//   hidden: {
//     y: '-50px',
//     opacity: 0,
//     transition: {
//       when: "afterChildren",
//     },
//   },
// }

const spring = {
  type: "tween"
};

function Users() {
  const [users, setUsers] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [search, setSearch] = React.useState('')

  const getUsers = () => {
    firebase
        .database()
        .ref("users/")
        .once("value")
        .then(data => {
          
        setUsers(filteredList(data.val()))
        setLoading(false)
        })
  }
 
  React.useEffect(() => {
    getUsers()
  }, [])

    function changeHandler(e) {
        setSearch(e.target.value)
    }

    function filteredList(arr) { 
      function compare(a, b) {
        if (a.score < b.score) return 1;
        if (a.score > b.score) return -1;
        return 0; 
      }

      let sortpost = arr.sort(compare);
      return sortpost.filter((usr) => {
        return usr.name
          .toLowerCase()
          .includes(search.toLowerCase());
      });
    }

return <Layout>
          <SEO title="Участники" />
            <section className="users">
              <div className="container"> 
                { loading
                    ? <Loader/> 
                    :<>
                    <div className="uses-list__search-wrapper">
                      <label className="uses-list__search">
                          <input type="text" className="uses-list__search-input" onChange={(e)=>changeHandler(e)}/>
                      </label>
                    </div>
                    <ul className="user-list" >{filteredList(users).map(user=>
                      <motion.li 
                        layoutTransition={spring} 
                        key={user.name} 
                        className="user-list__item">
                          <span className="user-list__num">{user.num}</span>
                          <span className="user-list__user">
                            <span className="user-list__name">{user.name}</span><br/>
                            <span className="user-list__city">{user.city}</span>
                          </span>
                          <span className="user-list__score">{user.score}</span>
                      </motion.li>
                        )}
                    </ul>
                    </>
                    }
              </div>
            </section>
        </Layout>

}

export default Users
