# Project Overview

## Spotter

## Project Description

Spotter is a bouldering library for climbers. View problems that others have posted, the difficulty of the climb, how they rated it, where it was located, and a description of the climb/beta(best moves to finish the climb). Rate the climbs if you've finished them, and search for climbs in a specific area.

## Wireframes
![homepage wireframe](https://res.cloudinary.com/dpbzq29kr/image/upload/v1613336079/Screen_Shot_2021-02-14_at_3.54.15_PM_cifxcr.png) desktop homepage
![mobile wireframe](https://res.cloudinary.com/dpbzq29kr/image/upload/v1613430815/Spotter/Screen_Shot_2021-02-15_at_6.12.52_PM_lnolsv.png) mobile homepage

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
                "difficulty": "V5",
                "problem": "Rubber Walrus Protector",
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

|  Day | Deliverable | Status
|---|---| ---|
|February 15| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|February 16| Project Approval | Incomplete
|Febryary 17| Finished components, base clickable model| Incomplete
|February 18| Add media queries for mobile site| Incomplete
|February 19| MVP| Incomplete
|February 20| Post-MVPs | Incomplete
|February 23| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Creating more starter data in airtable | H | 1hr| | |
| Nav Component| H | 2hrs| |  |
| Home Component|H|3hrs| | |
| Boulder Component|H|3hrs| | |
| Detail Component|H|3hrs| | |
| Form Component|H|3hrs| | |
| About Component|H|2hrs| | |
| Linking/Routing Components|H|3hrs| | |
| Figuring out params for detail component|H| 3hrs| | |
| Basic CSS for each component|M| 3hrs| | |
| Media Queries for mobile|H| 3hrs| | |
| Post MVP Styling |L|3hrs| | |
| Post MVP rating |L|3hrs| | |
|Post MVP carousel view|L| | |
| Total |  | 37hrs| | |

### Strengths:
I believe I am pretty strong in bulding components, I think getting my data on the page will be quick and painless.
### Weaknesses:
Linking and routing has given me difficulty, especially useParams. I think it will be hard to  get these to work.
### Opportunities:
I think I will finish MVP ahead of schedule which will give me the opportunity to really work on my styling, and I really need to work on CSS in general so this will be a good time to practice.
### Threats:
I don't foresee any threats, but I think I will have difficulty with some of my post-mvps and if I do I don't think my app will look as good as it could. I am really banking on a nice carousel but if it doesn't work I am not sure if it will look as good.
