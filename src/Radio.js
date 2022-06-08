import React, { Component, useState } from 'react'
form =()=>{

    const[formData,SetformData]= useState({gender:""})
}
const evchange =(event) =>{
    SetformData({...formData,[event.target.name]:event.target.value})
}