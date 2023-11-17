import { useParams } from "react-router-dom";
import Header from "../components/Header";

function TrainerDetails () {
  const trainers = [
    {
      id: 1,
      name: "Sasha du Bourg Palette",
      bio: "jveux tous les attraper",
    },
    {
      id: 2,
      name: "Dwayne Johnson",
      bio: "jveux tous les soulever",
    },
    {
      id: 3,
      name: "Affida Turner",
      bio: "je veux décéder",
    },
  ];

  const { trainersid } = useParams();

  const trainerFound = trainers.find((trainer) => {
    return trainer.id == trainersid;
  });

  return (
    <>
      <Header />
      <main>
        <h1>{trainerFound.name}</h1>
        <p>{trainerFound.bio}</p>
      </main>
    </>
  );
}

export default TrainerDetails;