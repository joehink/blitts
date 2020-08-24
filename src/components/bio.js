/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import profile from "../../content/assets/profile-pic.jpg"

const Bio = () => {
  return (
    <div className="bio">
      <img
        src={profile}
        alt="laurajane"
        width="75"
        height="75"
        className="profile"
      />
      <p>
        I am the mother of two kids. I am fighting my second battle with breast
        cancer...this time it has gone to my bones...lots of my bones. Of course
        I would like to survive this and I am trying hard to do that very
        thing....but a cheerful heart is good medicine too so as I blog about
        all of this there will be both tears and laughter....but it will always
        be "the true story".
      </p>
    </div>
  )
}

export default Bio
