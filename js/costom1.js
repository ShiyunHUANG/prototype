  /* ----------------------------------------------------------- */
  /*  15. POP UP COUPON
  /* ----------------------------------------------------------- */   
    // Get the coupon
    var coupon = document.getElementById('coupons');

    // Get the button that opens the coupon
    var btn = document.getElementById("viewCoupon");

    // Get the <span> element that closes the coupon
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the coupon 
    btn.onclick = function() {
        coupon.style.display = "block";
    }

    // When the user clicks on <span> (x), close the coupon
    span.onclick = function() {
        coupon.style.display = "none";
    }

    // When the user clicks anywhere outside of the coupon, close it
    window.onclick = function(event) {
        if (event.target == coupon) {
            coupon.style.display = "block";
        }
    } 