import Biceps from '../assets/Biceps.jpg'
import Shoulder from '../assets/shoulder.jpg'
import bicepscurl from '../assets/bicepscurl.jpg'
import Concent from '../assets/ConcentCurl.jpg'
import Hammercurl  from '../assets/Hammercurl.jpeg'
import Preacher from '../assets/Preacher.jpeg'
import cablerow from '../images/cablerow .jpg'
import pullups from '../images/Pullups.jpg'
import pulldown from '../images/pulldown.jpg'
import strightarm from '../images/strightarm.jpg'
import squats from '../images/squats.jpg'
import Lunges from '../images/Lunges.jpg'
import legpress from '../images/legpress.jpg'
import rome from '../images/romanian.jpg'

import Back from '../assets/back.jpg'
import Leg from '../assets/leg.jpg'

export const data = [
  {
    id: 1,
    dataset: [
      {
        Exercise: "Biceps Curls",
        image: bicepscurl,
        content: "Stand with your feet shoulder-width apart and grip a barbell with both hands using an underhand grip. Keep your elbows close to your body and curl the bar upward toward your shoulders. Squeeze your biceps at the top, then slowly lower the bar back down."
      },
      {
        Exercise: "Hammer Curl",
        image: Concent,
        content: "Hold a dumbbell in each hand with your palms facing your torso (neutral grip). Keeping your elbows tucked in, curl the dumbbells up toward your shoulders. Pause at the top, then lower them under control."
      },
      {
            Exercise: "Concentration Curl",
        image: Hammercurl,
        content: "Sit on a bench, lean slightly forward, and rest your elbow on the inside of your thigh. Curl the dumbbell upward without moving your upper arm. Slowly lower it back down."
      },
      {
          Exercise: " Preacher Curl",
        image: Preacher,
        content: "Sit at a preacher bench with your upper arms resting on the pad. Grip a barbell or EZ curl bar and curl it toward your shoulders. Lower it slowly under control."
      }
    ]
  },
  {
    id: 2,
    dataset: [
      {
        Exercise: "Lat Pulldown",
        image:pulldown ,
        content: "Sit at a lat pulldown machine and grip the bar with your hands slightly wider than shoulder-width. Pull the bar down towards your upper chest, squeezing your shoulder blades together. Slowly return the bar to the starting position."
      },
      {
         Exercise: "Pull-Ups",
        image: pullups,
        content: "Grab a pull-up bar with an overhand grip, hands slightly wider than shoulder-width. Hang with arms fully extended, then pull yourself up until your chin passes the bar. Lower yourself down slowly."
      },
      {
        
 Exercise: "Seated Cable Row",
        image: cablerow,
        content: "Sit at a cable row machine with your feet on the platform and knees slightly bent. Grab the handle with both hands and pull it toward your torso, squeezing your shoulder blades together. Return slowly.."
      },
      {
 Exercise: "Straight-Arm Lat Pulldown",
        image: strightarm,
        content: "Stand in front of a high pulley machine with a straight bar attachment. With your arms extended and hands shoulder-width apart, pull the bar downward in an arc motion until it reaches your thighs. Slowly return."
      }
    ]
  },
  {
    id: 3,
    dataset: [
      {
        Exercise: "Barbell Squats",
        image:squats,
        content: "Great for building overall leg strength..."
      },
      {
        Exercise: "Lunges",
        image: Lunges,
        content: "Stand tall and take a big step forward with one leg. Lower your body until both knees form 90-degree angles. Push back up to the starting position and repeat on the other leg."
      },
      {
        Exercise: "Leg Press",
        image: legpress,
        content: "Sit on the leg press machine and place your feet shoulder-width apart on the platform. Lower the platform by bending your knees until your legs are at a 90-degree angle. Push the platform back without locking your knees."
      }
      ,
      {
        Exercise: " Romanian Deadlift",
        image:rome,
        content: "Hold a barbell or dumbbells in front of your thighs. With a slight bend in the knees, hinge at your hips and lower the weights down the front of your legs until you feel a stretch in your hamstrings. Return to standing."
      }
    ]
  },
  {
    id: 4,
    dataset: [
      {
        Exercise: "Overhead Shoulder Press (Barbell or Dumbbell)",
        image: "",
        content: "Sit or stand with a barbell or dumbbells at shoulder level. Press the weight overhead"
      },
      {
        Exercise: "Lateral Raises",
        image: "",
        content: "Stand with a dumbbell in each hand at your sides. With a slight bend in your elbows, raise your arms to the sides until they’re parallel to the floor, then lower them back down slowly.."
      },
      {
             Exercise: "Front Raises",
        image: "",
        content: "Hold dumbbells in front of your thighs with palms facing your body. Raise the weights straight in front of you to shoulder level, then lower under control.."
      },
      {
          Exercise: "Bent-Over Reverse Fly (Rear Delt Fly)",
        image: "",
        content: "Bend at your hips with a flat back and hold dumbbells hanging below your shoulders. Raise your arms out to the sides like wings, squeezing your shoulder blades together. Lower slowly.."
      }
    ]
  }
];

export const Exercise = [
  {
    id: 1,
    title: "Biceps Muscle",
    image: Biceps
  },
  {
    id: 2,
    title: "Back Muscle",
    image: Back
  },
  {
    id: 3,
    title: "Leg Muscle",
    image: Leg
  },
  {
    id: 4,
    title: "Shoulder Muscle",
    image: Shoulder
  }
];
