import React, { Component } from "react";
import TeamMember from "./TeamMember";

const data = [
  {
    avatar:
      "https://demo.themezy.com/system/resources/demo_themes/000/000/010//dummy/person-1.jpg",
    name: "Sarah Stuart",
    role: "Co-founder",
    social: [
      {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        google: "https://google.com",
        pinterest: "https://pinterest.com",
      },
    ],
    id: "1",
  },
  {
    avatar:
      "https://demo.themezy.com/system/resources/demo_themes/000/000/010//dummy/person-2.jpg",
    name: "John Doet",
    role: "Managing Director",
    social: [
      {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        google: "https://google.com",
        pinterest: "https://pinterest.com",
      },
    ],
    id: "2",
  },
  {
    avatar:
      "https://demo.themezy.com/system/resources/demo_themes/000/000/010//dummy/person-3.jpg",
    name: "Jessica Branson",
    role: "Reviewer",
    social: [
      {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        google: "https://google.com",
        pinterest: "https://pinterest.com",
      },
    ],
    id: "3",
  },
  {
    avatar:
      "https://demo.themezy.com/system/resources/demo_themes/000/000/010//dummy/person-4.jpg",
    name: "Sarah Stuart",
    role: "Consultant",
    social: [
      {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        google: "https://google.com",
        pinterest: "https://pinterest.com",
      },
    ],
    id: "4",
  },
];

export class OurTeam extends Component {
  render() {
    return (
      <div 
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        paddingBottom: 30,
      }} >
        <div
        style={{
          display: "flex",
          width: "90%",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {data.map((elem) => (
          <TeamMember person={elem} key={elem.id} />
        ))}
      </div>
      </div>
      
    );
  }
}

export default OurTeam;
