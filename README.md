# Project Overview

## App Name

Spotters
[Live site](https://spotters.netlify.app/)

## Project Description

Spotter is a bouldering library for climbers. View problems that others have posted, the difficulty of the climb, how they rated it, where it was located, and a description of the climb/beta(best moves to finish the climb). Rate the climbs if you've finished them, and search for climbs in a specific area.

## Wireframes

desktop homepage
![homepage wireframe](https://res.cloudinary.com/dpbzq29kr/image/upload/c_scale,h_350/v1614007395/Spotter/Screen_Shot_2021-02-22_at_10.21.24_AM_xbwx75.png)

desktop form
![desktop form](https://res.cloudinary.com/dpbzq29kr/image/upload/c_scale,h_400/v1613492544/Spotter/Screen_Shot_2021-02-16_at_11.22.11_AM_tblmji.png)

desktop details
![destop details page](https://res.cloudinary.com/dpbzq29kr/image/upload/c_scale,h_400/v1613492106/Spotter/Screen_Shot_2021-02-16_at_11.14.34_AM_itymgr.png)

Mobile Homepage
![mobile wireframe](https://res.cloudinary.com/dpbzq29kr/image/upload/c_scale,h_240/v1613431088/Spotter/Screen_Shot_2021-02-15_at_6.12.52_PM_lnolsv.png)
Mobile Form
![mobile form](https://res.cloudinary.com/dpbzq29kr/image/upload/c_scale,h_240/v1613493216/Spotter/Screen_Shot_2021-02-16_at_11.33.22_AM_x7126r.png)
Mobile Details
![mobile details](https://res.cloudinary.com/dpbzq29kr/image/upload/c_scale,h_240/v1613493216/Spotter/Screen_Shot_2021-02-16_at_11.26.11_AM_l2bvxe.png)

## Component Hierarchy

![Component Heirarchy](https://res.cloudinary.com/dpbzq29kr/image/upload/v1613334595/Screen_Shot_2021-02-14_at_3.29.40_PM_dbzoup.png)

## API and Data Sample

data snippet from airtable API

```json
"records": [


        {
            "id": "recFdywHbnaSbYNbb",
            "fields": {
                "quality": 4.76,
                "photo": "https://res.cloudinary.com/dpbzq29kr/image/upload/v1613496105/Spotter/black_death_pfhgu9.jpg",
                "ratings": 25,
                "difficulty": "V7",
                "title": "Black Death",
                "description": "Thin (quarter pad) face holds to a powerful/shouldery throw to a decent ledge w/ left hand. Stick this and the remainder is casual",
                "author": "Andrew Schmalzer",
                "location": "Ortegas, NM"
            },
            "createdTime": "2021-02-14T15:31:45.000Z"
        }
```

#### MVP

- Create meaningful/useful data with airtable
- Allow users to view boulder problems on the main page
- Clickable photo link to a details page
- Allow users to fill out a form to add their own boulder problems

#### PostMVP

- Create carousel viewing of mainpage climbs
- Incorporate a rating system? Would need to keep track of total votes and average somehow.
- Lots of CSS work

## Project Schedule

| Day         | Deliverable                                        | Status     |
| ----------- | -------------------------------------------------- | ---------- |
| February 15 | Prompt / Wireframes / Priority Matrix / Timeframes | Complete   |
| February 16 | Project Approval                                   | Complete   |
| Febryary 17 | Finished components, base clickable model          | Complete   |
| February 18 | Add media queries for mobile site                  | Complete   |
| February 19 | MVP                                                | Complete   |
| February 20 | Post-MVPs                                          | Complete   |
| February 23 | Presentations                                      | Incomplete |

## Timeframes

| Component                                | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Creating more starter data in airtable   |    H     |      1hr       |     30min     |    30min    |
| Nav Component                            |    H     |      2hrs      |      1hr      |     1hr     |
| Home Component                           |    H     |      3hrs      |     2hrs      |    2hrs     |
| Boulder Component                        |    H     |      3hrs      |     2hrs      |    2hrs     |
| Detail Component                         |    H     |      3hrs      |     3hrs      |    3hrs     |
| Form Component                           |    H     |      3hrs      |     3hrs      |    3hrs     |
| About Component                          |    H     |      2hrs      |      1hr      |     1hr     |
| Linking/Routing Components               |    H     |      3hrs      |     3hrs      |    3hrs     |
| Figuring out params for detail component |    H     |      3hrs      |     3hrs      |    3hrs     |
| Basic CSS for each component             |    M     |      3hrs      |     3hrs      |    3hrs     |
| Media Queries for mobile                 |    H     |      3hrs      |     3hrs      |    3hrs     |
| Post MVP Styling                         |    L     |      3hrs      |     6hrs      |    6hrs     |
| Post MVP rating                          |    L     |      3hrs      |     3hrs      |    3hrs     |
| Total                                    |          |     34hrs      |    33.5hrs    |   33.5hrs   |

### Code-Snippet

One of the features I wanted to implement was a rating system, the problem I had was that I don't have a real backend, so users cant exist it was hard to figure out how to get an accurate average, and store that average over multiple sessions. I came up with this switch case in order to accomplish my goal. Ratings was a variable I added in order to keep track of the number of people that had clicked and than when someone clicked their rating I updated ratings by +1, and found the new average by taking the old "quality" multiplying it by the previous number of ratings adding the new quality, and dividing that by the previous number of ratings +1. The fullcode is within the src/components/Details/Details.jsx if you want more context.

```javascript
//variable for new quality based on ratings.
let newQuality = 0;
//function to handle clicks and assign an accurate average.
//the variable x is the id of which span is clicked.
const handleClick = (e) => {
  let x = e.target.id;
  switch (x) {
    case "one":
      newQuality =
        (climb.fields.quality * climb.fields.ratings + 1) /
        (climb.fields.ratings + 1);
      patchQuality();
      break;
    case "two":
      newQuality =
        (climb.fields.quality * climb.fields.ratings + 2) /
        (climb.fields.ratings + 1);
      patchQuality();
      break;
    case "three":
      newQuality =
        (climb.fields.quality * climb.fields.ratings + 3) /
        (climb.fields.ratings + 1);
      patchQuality();
      break;
    case "four":
      newQuality =
        (climb.fields.quality * climb.fields.ratings + 4) /
        (climb.fields.ratings + 1);
      patchQuality();
      break;
    case "five":
      newQuality =
        (climb.fields.quality * climb.fields.ratings + 5) /
        (climb.fields.ratings + 1);
      patchQuality();
      break;
    default:
      return false;
  }
};
```

### Strengths:

I believe I am pretty strong in bulding components, I think getting my data on the page will be quick and painless.

### Weaknesses:

Linking and routing has given me difficulty, especially useParams. I think it will be hard to get these to work.

### Opportunities:

I think I will finish MVP ahead of schedule which will give me the opportunity to really work on my styling, and I really need to work on CSS in general so this will be a good time to practice.

### Threats:

I don't foresee any threats, but I think I will have difficulty with some of my post-mvps and if I do I don't think my app will look as good as it could. I am really banking on a nice carousel but if it doesn't work I am not sure if it will look as good.
