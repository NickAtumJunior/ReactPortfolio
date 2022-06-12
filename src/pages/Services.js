import React from "react";
import { useWindupString } from "windups";

function Services() {
  const [web] = useWindupString("WebDevelopment",{
    pace: (char) => (char === " " ? 50 : 80)
   })

   const [design] = useWindupString("Design",{
    pace: (char) => (char === " " ? 50 : 80)
   })

   const [branding] = useWindupString("Branding",{
    pace: (char) => (char === " " ? 50 : 80)
   })
  return (
    <div className="services">

      <div className="service-one">
        <div className="service-text">
        <center><h1>{web}</h1></center>
          <p>
                   Design beautiful websites along with good 
                   tools and tremendous team.we made our 
                   customers profitable and with proficient toush
                   always looking forward to implement client needs 
                   Design beautiful websites along with good 
                   tools and tremendous team.we made our 
                   customers profitable and with proficient toush
                   always looking forward to implement client needs 
                   customers profitable and with proficient toush
                   always looking forward to implement client needs 
                   Design 
          </p>
        </div>
        <center><button>Hire Service</button></center>
      </div>

      <div className="service-two">
        <div className="service-text">
        <center><h1>{design}</h1></center>
        <p>
                   Design beautiful websites along with good 
                   tools and tremendous team.we made our 
                   customers profitable and with proficient toush
                   always looking forward to implement client needs 
                   Design beautiful websites along with good 
                   tools and tremendous team.we made our 
                   customers profitable and with proficient toush
                   always looking forward to implement client needs 
                   customers profitable and with proficient toush
                   always looking forward to implement client needs 
                   Design 
          </p>
        </div>
        <center><button>Hire Service</button></center>
      </div>

      <div className="service-three">
        <div className="service-text">
          <center><h1>{branding}</h1></center>
        <p>
                   Design beautiful websites along with good 
                   tools and tremendous team.we made our 
                   customers profitable and with proficient toush
                   always looking forward to implement client needs 
                   Design beautiful websites along with good 
                   tools and tremendous team.we made our 
                   customers profitable and with proficient toush
                   always looking forward to implement client needs 
                   customers profitable and with proficient toush
                   always looking forward to implement client needs 
                   Design 
          </p>
        </div>
        <center><button>Hire Service</button></center>
      </div>
      
    </div>
  );
}

export default Services;
