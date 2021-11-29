<template>
<html lang="en">
<div>
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Skit Road</title>
  </head>

  <div class="container" id="bodyContainer">
      <!--HEADER-->
      <div class="shows">
        <h1>BUY TICKETS HERE</h1>
      </div>

          <!--ROW 4 PRODUCTS-->
          <table class="table">
                <thead>
                    <th>Show</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Image</th>
                </thead>
                <tbody>
                    <tr v-for="show in shows" v-bind:key="show.id">
                        <td>{{ show.name }}</td>
                        <td>{{ show.category }}</td>
                        <td>{{ show.description }}</td>
                        <td>
                            <img :src="show.image" alt="" width="150">
                        </td>
                    </tr>
                </tbody>
            </table>   
  </div>
  <footer>
        <div class=container>
            <p>&copy; Skit Road Productions 2015-2021</p>
            <nav id="footerNav"><a href="#top">Back to top</a> | <a href="">FAQ</a> | <a href="">Privacy Agreement</a> | <a href>Contact</a></nav>
        </div>
    </footer>
  </div>
  </html>
</template>

<script>
import * as axios from 'axios'

export default {
    Name: 'Shows',
    data() {
        return {
            shows:[]
        }
    },
    created()
    {
        //  Request token from local storage to access show data
        const token = localStorage.getItem('token')

        //  Set constant for tokens
        const headerTokens = { "Content-Type": "application/json",
                       "Authorization": "Bearer " + token
            }

        //  Create axios request object
        const apiClient = axios.create({
            baseURL: 'http://mywebapp-775f4.ue.r.appspot.com',
            withCredentials: false,
            headers: headerTokens
        })

        //  GET request for show data
        apiClient.get('http://mywebapp-775f4.ue.r.appspot.com/shows', { headerTokens })
        .then(response =>{
            console.log(response)
            //  Send the data to the form
            this.shows = response.data;
        })
        .catch()
        
    },
    fetchAccessToken({ commit }) {
  commit('updateAccessToken', localStorage.getItem('accessToken'));
}
}
</script>

<style>
/* eslint-disable no-mixed-spaces-and-tabs */
h1
{
    font-style:bold;
    font-weight:900;
    color:beige;
    background-color:darkred;
    border-style:dotted;
    border-radius: 10px;
}
h2
{
    font-style:bold;
    font-weight:900;
}
body
{
    text-align: center;
    background-image:URL('images/ledzeppelin.jpg');
}
footer
{
    text-align: center;
    background-color:beige;
    padding:20px;
}
#images
{
    height: 300px;
    border-radius: 20px;
    border-style: solid;
    border-color:darksalmon;
    height: 400px
}
#bodyContainer
{
    background-color: bisque;
    padding: 25px;
}
#bandImage
{
    background-image:URL('images/pinkfloyd.jpg');
    height:300px;
    max-width: 500px;
    margin: 10px;
    border-style: hidden;
    border-radius: 10px;
}
#posterImage1
{
    background-image:URL('images/gnr.jpg');
    height:350px;
    background-size: contain;
    background-repeat:no-repeat;
    background-position: right;
    margin-right: 100px;
    margin-top: 30px;
}
#posterImage2
{
    background-image:URL('images/aliceinchains.jpg');
    background-size: contain;
    background-repeat:no-repeat;
    background-position: left;
    margin-left: 100px;
    margin-top: 30px;
}
#posterImage3
{
    background-image:URL('images/linkinpark.jpg');
    height:350px;
    background-size: contain;
    background-repeat:no-repeat;
    background-position: right;
    margin-right: 100px;
    margin-top: 30px;
}
#posterImage4
{
    background-image:URL('images/greenday.jpg');
    background-size: contain;
    background-repeat:no-repeat;
    background-position: left;
    margin-left: 100px;
    margin-top: 30px;
}
h3
{
    padding-top: 30px;
    text-decoration:underline;
    font-weight:bold;
}
#divider
{
    margin-top:20px;
    border-bottom-style: dotted;
    border-color:brown;
}
#buyButton
{
    background-color:darksalmon;
    color:beige;
    border-style: dotted;
    border-color:darkred;
    border-width:thick;
    font-weight:600;
}
a
{
    color: black;
}
.form {
    position: relative;
    z-index: 1;
    background: darkred;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    border-radius: 25px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    border-style:dotted;
    color: beige;
  }

  .form button {
    font-family: sans-serif;
    text-transform: uppercase;
    color: white;
    outline: 0;
    background: darksalmon;
    width: 70%;
    border: 0;
    padding: 10px;
    color: #FFFFFF;
    font-size: 12px;
    transition: all 0.3 ease;
    cursor: pointer;
    border-radius: 25px;
  }
  .form button:hover,.form button:active,.form button:focus {
    background: #B79888;
  }
  h3 {
    font-style:bold;
    font-weight:900;
    color:beige;
    background-color:darkred;
    border-radius: 10px;
    text-decoration: none;
  }
  .btns {
      margin-top: 20px;
  }
/* eslint-enable no-mixed-spaces-and-tabs */
</style>
