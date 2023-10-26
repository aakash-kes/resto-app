import React from 'react'
import Layout from '../Component/Layout/Layout'
import '../Styles/AboutStyle.css'
const About = () => {
  return (
    <Layout>
      <div className="about">
        <div className="aboutContainer">
          <h1>WELCOME TO MY RESTURENT</h1>
          <h2>“Never eat more than you can life.”</h2>
          <p>
            A restaurant is a place where people visit to eat and drink the food
            being prepared on the premises and pays for the same. The food is
            served at the table to have a comfortable visit for your meals. The
            restaurant offers a menu with various options for your meal, to
            choose from.
          </p>
          <ol>
            <li>
              Restaurants provide you with different cuisines of food to satisfy
              your hunger.
            </li>
            <li>
              The food preparation and presentation gives you a happy feel
              during your dull
            </li>
            <li>
              The ambiance that a restaurant provides you with gives one all the
              more reason to visit to cherish their time.
            </li>
            <li>
              The restaurant is a life savior when one doesn’t feel like cooking
              or wants to eat something else.
            </li>
            <li>
              You get to explore places when you plan to visit a restaurant.
            </li>
            <li>
              The fast-food restaurant provides your meals on the go to save
              your time at affordable prices.
            </li>
            <li>
              The restaurant is a place to enjoy your special occasions like
              Birthdays, Anniversaries, Achievements, etc.
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  )
}

export default About
