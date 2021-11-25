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
          <div class="row" >
              <div class="col"><h3>GUNS N' ROSES</h3> <!--GNR-->
                  <p>Vestibulum at vehicula tortor, hendrerit commodo lacus. Aenean a lacus porta, porta elit nec, ultricies ex. Nam gravida sit amet purus sed mollis. Vivamus venenatis nulla sit amet erat convallis vehicula. Morbi a tincidunt arcu. Integer euismod odio lorem, vel elementum nibh fermentum condimentum. Donec nunc risus, finibus at semper ut, cursus vel urna. Donec ac magna ut justo tempor varius sed sed quam. Suspendisse a malesuada lorem, in varius eros. Duis lectus risus, scelerisque et vulputate et, mollis eget velit. Praesent in ipsum pretium, dapibus arcu eu, bibendum dui.</p>
                  <p><b>Category: Rock</b></p>
                  <a class="btn" href="" role="button" id="buyButton">BUY</a>
              </div>
              <div class="col" id="posterImage1"></div>
              <div class="w-100" id="divider"></div>
              <div class="col" id="posterImage2"></div>
              <div class="col"><h3>Alice in Chains</h3> <!--AIC-->
                  <p>Praesent at convallis massa, ut rutrum nibh. Phasellus dapibus venenatis dictum. Pellentesque eu justo vel velit varius viverra a in ipsum. Fusce mollis nunc quis pretium accumsan. Praesent malesuada et neque id sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec auctor cursus varius. Duis ultrices quam a odio pellentesque, sed porttitor eros efficitur.Praesent at convallis massa, ut rutrum nibh. Phasellus dapibus venenatis dictum. Pellentesque eu justo vel velit varius viverra a in ipsum. Fusce mollis nunc quis pretium accumsan. Praesent malesuada et neque id sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec auctor cursus varius. Duis ultrices quam a odio pellentesque, sed porttitor eros efficitur.</p>
                  <p><b>Category: Metal</b></p>
                  <a class="btn" href="" role="button" id="buyButton">BUY</a>
              </div>
              <div class="w-100" id="divider"></div>
              <div class="col"><h3>Linkin Park</h3> <!--LP-->
                  <p>Vestibulum at vehicula tortor, hendrerit commodo lacus. Aenean a lacus porta, porta elit nec, ultricies ex. Nam gravida sit amet purus sed mollis. Vivamus venenatis nulla sit amet erat convallis vehicula. Morbi a tincidunt arcu. Integer euismod odio lorem, vel elementum nibh fermentum condimentum. Donec nunc risus, finibus at semper ut, cursus vel urna. Donec ac magna ut justo tempor varius sed sed quam. Suspendisse a malesuada lorem, in varius eros. Duis lectus risus, scelerisque et vulputate et, mollis eget velit. Praesent in ipsum pretium, dapibus arcu eu, bibendum dui.</p>
                  <p><b>Category: Rock</b></p>
                  <a class="btn" href="" role="button" id="buyButton">BUY</a>
              </div>
              <div class="col" id="posterImage3"></div>
              <div class="w-100" id="divider"></div>
              <div class="col" id="posterImage4"></div>
              <div class="col"><h3>Green Day</h3> <!--GD-->
                  <p>Praesent at convallis massa, ut rutrum nibh. Phasellus dapibus venenatis dictum. Pellentesque eu justo vel velit varius viverra a in ipsum. Fusce mollis nunc quis pretium accumsan. Praesent malesuada et neque id sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec auctor cursus varius. Duis ultrices quam a odio pellentesque, sed porttitor eros efficitur.Praesent at convallis massa, ut rutrum nibh. Phasellus dapibus venenatis dictum. Pellentesque eu justo vel velit varius viverra a in ipsum. Fusce mollis nunc quis pretium accumsan. Praesent malesuada et neque id sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec auctor cursus varius. Duis ultrices quam a odio pellentesque, sed porttitor eros efficitur.</p>
                  <p><b>Category: Punk/Rock</b></p>
                  <a class="btn" href="" role="button" id="buyButton">BUY</a>
              </div>
          </div>   
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
