import React, {useEffect, useState, useRef} from 'react'

const getElementXY = (ele) =>{

    let box = ele.getBoundingClientRect();

    return {
        left : box.left,
        right : box.right,
        top : box.top,
        bottom : box.bottom
    }

}
const mouse = {
    x: null,
    y: null,
    radius: 40,
  };


class Particle {
    
    constructor({x = 0, y = 0, primary = "red", secondary = "pink"}) {
      this.x = x;
      this.y = y;
      this.size = 1;
      this.baseX = x; // initial position of particle w.r.t to x-coord
      this.baseY = y;
      this.color = primary;
      this.primary = primary;
      this.secondary = secondary;
      this.type = "circle";
      this.density = Math.random() * 30;
    }
  
    
  
    draw(ctx) {
      ctx.fillStyle = this.color;
      if (this.type == "circle") {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      } else
       if (this.type == "triangle") {
         
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.size, this.y);
        ctx.lineTo(this.x , this.y - this.size);
        ctx.lineTo(this.x  , this.y );
        ctx.stroke();
        ctx.closePath();
      }
    }
  
    update(canvas) {
      
      let cord = getElementXY(canvas);
      let mx = mouse.x - cord.left; // getting mouse x relative to canvas position
      let my = mouse.y - cord.top;
      let dx = mx - this.x;
      let dy = my - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy); // pythagorus formula
      let forceDirectionX = dx / distance;
      let forceDirectionY = dy / distance;
      let maxDistance = mouse.radius;
      let force = (maxDistance - distance) / maxDistance;
      let directionX = forceDirectionX * force * this.density;
      let directionY = forceDirectionY * force * this.density;
  
      if (distance < mouse.radius) {
        this.x -= directionX;
        this.y -= directionY;
        this.color = this.secondary;
  
      } else {
        this.color = this.primary;
  
        if (this.x !== this.baseX) {
          let dx = this.x - this.baseX;
          this.x -= dx / 10;
        }
        if (this.y !== this.baseY) {
          let dy = this.y - this.baseY;
          this.y -= dy/10;
        }
        else{
            let dy = this.y - this.baseY;
            this.y -= dy/10;
        }
      }
    }
}


  
const ParticleHeading = (props) => {
    const { 
      title = "Untitled", 
      color, 
      width = 1000 ,
      height = 1000,   
      scale = 2,
      sx ,
      primary,
      secondary
  
    } = props;
  
    const wire = {
      stroke :  "red",
      width : "2",
      range : 2,
      ...props.wire
    }
  
    const canvRef = useRef();
    const [particles, setParticles] = useState([]);
  
  async function connect() {
    
      const canvas = canvRef.current;
      let ctx = canvas.getContext("2d");
    
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
  
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < wire.range) {

            ctx.strokeStyle = wire.stroke;
            ctx.lineWidth = wire.width;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }
  
    async function animate() {
      if (canvRef.current) {
   
          const canvas = canvRef.current;
          let ctx = canvas.getContext("2d");
    
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < particles.length; i++) {
            particles[i].draw(ctx);
            particles[i].update(canvas);
          }
  
        connect();
      }
      window.requestAnimationFrame(animate);
  
    }
  
    useEffect(() => {
  
      if (canvRef) {
        const canvas = canvRef.current;
        canvas.width = width;
        canvas.height = height;
  
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = color;
  
        ctx.font = "40px Titan One";
        ctx.fillText(title, 0, 40);
        const textCoord = ctx.getImageData(0, 0, width, height);
        // console.table(textCoord);
        let particle_array = [];
        //   for (let i = 0; i < 1000; i++) {
        //     let x = Math.random() * canvas.width;
        //     let y = Math.random() * canvas.height;
        //     particle_array.push(new Particle(x, y));
        //   }
  
        for (let y = 0, y2 = textCoord.height; y < y2; y++) {
          for (let x = 0, x2 = textCoord.width; x < x2; x++) {
            if (textCoord.data[((y * 4 * textCoord.width + x * 4)+ 3)] > 128) {
              let pX = x * scale;
              let pY = y * scale;
              particle_array.push(new Particle({x : pX, y : pY, primary, secondary}));
            }
          }
        }
  
        setParticles(particle_array);
        animate();
        
      
      }
    }, []);
  
    window.requestAnimationFrame(animate);
  
    return (
      
      <canvas
        ref={canvRef}
        style={{ top: "0", left: "0",
        transformOrigin : "0% 10%",
        ...sx }}
         
      ></canvas>
    );
  };
  
  export default ParticleHeading;