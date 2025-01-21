import { Accordion } from "react-bootstrap";

const AfterCare = () => {
  return (
    <div>
      <section className="aftercare">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h3 className="my-3">Permanent Cosmetic Procedure Info</h3>
              <p id="disclaimer">
                If you have any skin treatments, laser hair removal, plastic
                surgery or other skin altering procedures, there may be adverse
                changes that may not be correctable. We can perform the
                procedure
                <strong className="text-danger"> 6-8 weeks after</strong> any of
                the above treatments you may have had done.
                <br />
                <br />
                If you are pregnant, it is highly recommended that you avoid
                permanent makeup procedures.<br/>
                <strong className="text-danger">
                  For your safety, we will not perform the procedure in this
                  situation.
                </strong>
              </p>
            </div>
          </div>
        </div>

        <section id="aftercare-processes">
          <div className="container">
            <div>
              <h3>
                Read about the different procedures and their aftercare
                processes below:
              </h3>
            </div>

            <div className="row my-3 g-5 justify-content-around align-items-center">
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Microblading</Accordion.Header>
                  <Accordion.Body>
                    <h3 className="text-uppercase text-darkestgreen">
                      Microblading Procedure
                    </h3>
                    <p>
                      Microblading is a two-hour procedure that involves the
                      following steps:
                    </p>
                    <p className="text-center">
                      Optional consultation
                      <br />
                      Taking measurements <br />
                      Drawing with pencil &amp; outlining
                      <br />
                      Matching of pigments
                      <br />
                      Numbing
                      <br />
                      Microblading
                      <br />
                      Healing process
                    </p>
                    <p>
                      It is important that you communicate what preferences, if
                      any, you would like done to your brows to ensure that you
                      are completely satisfied with them. If you are unsure on
                      how to go about your brows, do not hesitate to reach out
                      for a free consultation. We want to make this experience
                      for you as comfortable as possible.
                    </p>
                    <h3 className="text-uppercase text-darkestgreen">
                      Microblading Aftercare
                    </h3>
                    <p className="fs-4 text-center text-danger">PLEASE NOTE</p>
                    <p className="text-center">
                      Eyebrows will appear darker and bolder due to natural
                      scabbing and healing for the first 10 days.
                      <br />
                      This is very common for all permanent cosmetic procedures.
                    </p>
                    <ul>
                      <li>
                        It is important that you follow the aftercare steps we
                        provide after your microblading appointment to make sure
                        that your brows heal properly. How well you take care of
                        your brows following the procedure will determine how
                        well they stay.
                      </li>
                      <li>
                        Avoid applying makeup, powder, cream with active
                        ingredients over the brows, bathing in public water,
                        strong exercise with profuse sweating, sauna, solarium,
                        etc. <strong>2-3 weeks</strong> after the procedure.
                      </li>
                      <li>
                        Avoid getting your brows wet after the procedure to
                        maintain the pigment and allow the microblading to
                        retain in the skin. Do not panic if you get a few drops
                        of water on your brows. Lightly dab them dry. If you
                        feel concerned, you can always reach out.
                      </li>
                      <li>
                        You will receive more in-depth instructions on how to
                        take care of your brows after your procedure, which
                        includes how to rinse your brows and how to apply cream.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Makeup</Accordion.Header>
                  <Accordion.Body>
                    <h3 className="text-uppercase text-darkestgreen">
                      Makeup Procedure
                    </h3>
                    <p>
                      Lip and eyeliner tattoos have different procedure times
                      depending on which type you choose to get done.
                    </p>
                    <p className="text-center">
                      Full upper &amp; lower eyeliner: 2 hours
                      <br />
                      Upper eyeliner: 1 hour &amp; 30 mins
                      <br />
                      Lower eyeliner: 1 hour &amp; 15 mins
                      <br />
                      Full lips: 3 hours
                      <br />
                      Soft lip liner: 1 hour &amp; 15 mins
                      <br />
                      Healing process
                    </p>
                    <p>
                      There are many pigments to choose from, and the healing
                      process is less critical than traditional microblading.
                      In-depth aftercare of lip and eyeliner procedures can be
                      read here:
                    </p>
                    <ul>
                      <li>
                        <a
                          className="text-darkestgreen"
                          href="https://nicolemansur.com/blog-content/permanent-eyeliner-aftercare-everything-you-need-to-know"
                        >
                          Eyeliner
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-darkestgreen"
                          href="https://emd.saccounty.gov/EH/Documents/BodyArt_SamplePermanentCosmetics-LipsAftercareNotice.pdf"
                        >
                          Lips
                        </a>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Lashes</Accordion.Header>
                  <Accordion.Body>
                    <h3 className="text-uppercase text-darkestgreen">
                      Lashes Procedure
                    </h3>
                    <p>
                      Our lash procedures typically are 1 hour and 15 mins. You
                      can choose to have a full set of lashes done or fill in
                      your lashes according to your preference. There are many
                      looks and styles to pick from that best complement your
                      eyes. It is also important that you check to make sure you
                      are not allergic to lash adhesive prior to your
                      appointment.
                    </p>
                    <h3 className="text-uppercase text-darkestgreen">
                      Lashes Aftercare
                    </h3>
                    <p>
                      Taking care of your lashes after your appointment is quite
                      simple but highly important to keep them long-lasting.
                    </p>
                    <ul>
                      <li>
                        Avoid getting your lashes wet and any kind of moisture
                        for up to 48 hours after application.
                      </li>
                      <li>Do not rub or touch your eyes.</li>
                      <li>Avoid oil around your lashes.</li>
                      <li>Avoid sleeping on your lashes.</li>
                    </ul>
                    <h3>For Lash Extensions</h3>
                    <ul>
                      <li>
                        Most importantly, wash your lashes daily with a gentle,
                        oil-free, and alcohol-free cleanser, such as a foaming
                        cleanser. Work the soap in using a soft eye cleansing
                        brush and focus on your lash line where much of the dirt
                        and bacteria build up. If you have oily skin or eyelids,
                        you can choose to wash your lashes twice a day. Rinse
                        and dab your lashes gently to dry. Brush through them
                        with a clean lash wand.
                      </li>
                      <li>
                        It is normal to have a couple of lashes fall out
                        throughout the weeks following your appointment. You can
                        always choose to fill in your lashes.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AfterCare;
