# Project Overview

## App Name

Spotter

## Project Description

Spotter is a bouldering library for climbers. View problems that others have posted, the difficulty of the climb, how they rated it, where it was located, and a description of the climb/beta(best moves to finish the climb). Rate the climbs if you've finished them, and search for climbs in a specific area.

## Wireframes

desktop homepage
![homepage wireframe](https://res.cloudinary.com/dpbzq29kr/image/upload/c_scale,h_400/v1613336079/Screen_Shot_2021-02-14_at_3.54.15_PM_cifxcr.png)

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
{
  "records": [
    {
      "id": "recUoGqKmfIUhHYuU",
      "fields": {
        "quality": "5",
        "photo": "https://res.cloudinary.com/dpbzq29kr/image/upload/v1613317217/Screenshot_20210214-103820_2_ctmrr7.png",
        "ratings": "1",
        "difficulty": "V5",
        "problem": "Rubber Walrus Protector",
        "description": "very pressy climb, small holds so its important to stay tight to the wall. Make small moves moving up along the arete, keeping body tight.",
        "author": "Huck",
        "location": "Socorro,NM"
      },
      "createdTime": "2021-02-14T15:31:45.000Z"
    },
    {
      "id": "recFdywHbnaSbYNbb",
      "fields": {},
      "createdTime": "2021-02-14T15:31:45.000Z"
    },
    {
      "id": "recpwsJgyq43DSh3d",
      "fields": {},
      "createdTime": "2021-02-14T15:31:45.000Z"
    }
  ],
  "offset": "recpwsJgyq43DSh3d"
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
| Febryary 17 | Finished components, base clickable model          | Incomplete |
| February 18 | Add media queries for mobile site                  | Incomplete |
| February 19 | MVP                                                | Incomplete |
| February 20 | Post-MVPs                                          | Incomplete |
| February 23 | Presentations                                      | Incomplete |

## Timeframes

| Component                                | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Creating more starter data in airtable   |    H     |      1hr       |     30min     |    30min    |
| Nav Component                            |    H     |      2hrs      |      1hr      |     1hr     |
| Home Component                           |    H     |      3hrs      |     2hrs      |    2hrs     |
| Boulder Component                        |    H     |      3hrs      |               |             |
| Detail Component                         |    H     |      3hrs      |     3hrs      |    3hrs     |
| Form Component                           |    H     |      3hrs      |     3hrs      |    3hrs     |
| About Component                          |    H     |      2hrs      |               |             |
| Linking/Routing Components               |    H     |      3hrs      |     3hrs      |    3hrs     |
| Figuring out params for detail component |    H     |      3hrs      |               |             |
| Basic CSS for each component             |    M     |      3hrs      |               |             |
| Media Queries for mobile                 |    H     |      3hrs      |               |             |
| Post MVP Styling                         |    L     |      3hrs      |               |             |
| Post MVP rating                          |    L     |      3hrs      |     3hrs      |    3hrs     |
| Post MVP carousel view                   |    L     |                |               |
| Total                                    |          |     37hrs      |               |             |

### Strengths:

I believe I am pretty strong in bulding components, I think getting my data on the page will be quick and painless.

### Weaknesses:

Linking and routing has given me difficulty, especially useParams. I think it will be hard to get these to work.

### Opportunities:

I think I will finish MVP ahead of schedule which will give me the opportunity to really work on my styling, and I really need to work on CSS in general so this will be a good time to practice.

### Threats:

I don't foresee any threats, but I think I will have difficulty with some of my post-mvps and if I do I don't think my app will look as good as it could. I am really banking on a nice carousel but if it doesn't work I am not sure if it will look as good.
