import "./About.css";
function About() {
  return (
    <>
      <div id="about-container">
        <h2>What is spotter?</h2>
        <br />
        <main id="about">
          <p>
            Spotter is a bouldering library for climbers. The goal is to get
            lots of community contributed boulders in one place. Making it
            easier for people to find their new projects, and share them with
            friends.
          </p>
          View problems that others have posted, the difficulty of the climb,
          how they rated it, where it was located, and a description of the
          climb/beta. Rate the climbs if you've finished them, and search for
          climbs in a specific area.
          <p>
            For now this site is only for bouldering, but in the future I would
            want to add another section for sport climbing and trad climbs as
            well. The locations are vague, if you would like to know more
            accurate locations you can{" "}
            <a href="mailto:ginestah@gmail.com?subject=Spotter Location Inquiry">
              email me
            </a>{" "}
            and I would be happy to give you more accurate coordinates to the
            climb. Over time I would love to implement a map API to show the
            locations of climbs more accurately.
          </p>
        </main>
      </div>
    </>
  );
}
export default About;
