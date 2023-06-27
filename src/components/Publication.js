import Aos from "aos";
import { useEffect } from "react";
import { Container, Image } from "react-bootstrap";

export function PublicationCard({ img, title, uri }) {
  return (
    <div className="publication-card d-flex flex-column justify-content-center">
      <a
        href={uri}
        target="_blank"
        className="d-flex flex-column justify-content-center"
      >
        <Image src={process.env.PUBLIC_URL + img} />
      </a>
      <h4 className="py-2 px-4">{title}</h4>
      <a
        href={uri}
        target="_blank"
        className="d-flex justify-content-end align-items-center p-2"
      >
        <button>Download</button>
      </a>
    </div>
  );
}

export function Publications({ publications }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="publication-wrapper">
      <Container>
        <h2 data-aos="fade-right" className="my-2">
          Publications
        </h2>
        <Container className="d-flex justify-content-center align-items-center flex-column">
          {publications.map((publication, i) => (
            <>
              <div data-aos="fade-up" className="my-4">
                <h3 key={i}>
                  <span>{publication.year}</span>
                </h3>
              </div>
              <div
                data-aos="zoom-in-down"
                className="d-flex justify-content-center align-items-start gap-5 flex-wrap"
              >
                {publication.publications.map((publication) => (
                  <PublicationCard
                    key={publication.id}
                    img={publication.image}
                    uri={publication.url}
                    title={publication.title}
                  />
                ))}
              </div>
            </>
          ))}
        </Container>
      </Container>
    </section>
  );
}
