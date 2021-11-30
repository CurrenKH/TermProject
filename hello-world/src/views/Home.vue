<!--To commit:

open cmd and navigate to directory (within the file path including package.json and project folder)

git add .
git commit -m "message"
git push -u origin master


To clone project:

Open folder where you want the project to be (empty)
Project page > Code > clone > copy endpoint link
git clone (link)


To pull:

git pull master-->

<template>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Skit Road Ticketmasters</title>
  </head>
    
  <body>
    <div class="container" id="bodyContainer">
        <!--HEADER-->
        <div class="col">
            <h1>SKIT ROAD TICKETMASTERS</h1><p><b>Your Source of Tickets</b></p>
        </div>
        
        <!--CAROUSEL-->
        <div class="row">
            <div class="col">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="@/assets/images/front.jpg" alt="First slide" id="images">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="@/assets/images/front.jpg" alt="Second slide" id="images">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="@/assets/images/front.jpg" alt="Third slide" id="images">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            </div>
        
        <!--ROW 2 BUTTONS-->
        <div class="row">
            <div class="col">
                <div class="b-dropdown"> <!--MUSIC/SECONDARY BUTTON-->
                    <button class="btn btn-secondary dropdown-toggle" type="button" id=secondaryDropDown data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <h2>OUR GOAL</h2><p>To allow customers to buy the tickets they need!</p>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id=secondaryDropDownInfo>
                        <p>uam nulla porttitor massa id neque aliquam vestibulum morbi. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Ut tortor pretium viverra suspendisse potenti nullam. Consequat mauris nunc congue nisi vitae.Velit laoreet id donec ultrices tincidunt.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="dropdown"> <!--INTRO/MAIN BUTTON-->
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <h2>INTRODUCTION</h2><p>We are a ticket vendor offering many purchase choices to our visitors!</p> 
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id=dropDownInfo>
                        <p> Ut tortor pretium viverra suspendisse potenti nullam. Consequat mauris nunc congue nisi vitae.Velit laoreet id donec ultrices tincidunt arcu non sodales. Id velit ut tortor pretium viverra. Integer enim neque volutpat ac. Arcu felis bibendum ut tristique et egestas.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="dropdown"> <!--TICKETS/SECONDARY BUTTON-->
                    <button class="btn btn-secondary dropdown-toggle" type="button" id=secondaryDropDown data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <h2>TICKETS?</h2><p>By signing up/logging in you can purchase some today!</p> 
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id=secondaryDropDownInfo>
                        <p> Ut tortor pretium viverra suspendisse potenti nullam. Consequat mauris nunc congue nisi vitae.Velit laoreet id donec ultrices tincidunt arcu non sodales. Id velit ut tortor pretium viverra. Integer enim neque volutpat ac. Arcu felis bibendum ut tristique et egestas.Consequat.</p>
                    </div>
                </div>
            </div>
        </div>
        
        <!--ROW 3 COLUMNS-->
        <div class="row">
            <div class="col"><h2>WHY PICK US?</h2><p>Our 99% customer satisfaction rating has proven our services to be reliable for any occasion when it comes to buying tickets. We work with many theaters around the area to provide our visitors the opportunity to shop for tickets online, making it fast and easy for all. Since 2015, SKT has aimed to be the best company in the business.</p></div>
            <div class="col" id="bandImage"></div>
        </div>
        </div>
      
      
    
  </body>
    <footer>
        <div class=container>
            <p>&copy; Skit Road Ticketmasters 2015-2021</p>
            <nav id="footerNav"><a href="#top">Back to top</a> | <a href="">FAQ</a> | <a href="">Privacy Agreement</a> | <a href>Contact</a></nav>
        </div>
    </footer>
</html>    
</template>

<script>

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
    background-image:URL('images/film.jpg');
}
footer
{
    text-align: center;
    background-color:beige;
    padding:20px;
}
#carouselExampleControls
{
    height: 300px;
}
#images
{
    height: 300px;
    border-radius: 20px;
    border-style: solid;
    border-color:darksalmon;
    height: 400px
}
#dropdownMenuButton
{
    margin-top: 120px;
    margin-bottom: 50px;
    height:250px;
    white-space: normal !important;
    word-wrap: break-word !important;
    background-color:beige;
    border-radius: 30px;
    border-style: solid;
    border-color:brown;
    border-width:thick;
    color: chocolate
}
#dropDownInfo
{
    padding: 10px;
    text-align: center;
    max-width: inherit;
    border-style:hidden;
    background-color:chocolate;
    color:beige;
    border-radius: 10px;
}
#secondaryDropDown
{
    margin-top: 150px;
    height: 150px;
    background-color:darksalmon;
    border-radius: 30px;
    border-style: dotted;
    border-color:darkred;
    border-width:thick;
}
#secondaryDropDownInfo
{
    padding: 10px;
    text-align: center;
    width:250px;
    border-style:hidden;
    background-color:chocolate;
    color:beige;
    border-radius: 10px;
}
#bodyContainer
{
    background-color: bisque;
    padding: 25px;
}
#bandImage
{
    background-image:URL('images/theater.jpg');
    height: 500px;
    max-width: 800px;
    margin: 10px;
    border-style: hidden;
    border-radius: 10px;
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
