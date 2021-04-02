// import fetch from 'node-fetch';
import { useRef, useState, useEffect } from 'react';
// import signes from './data/signes'; => meme contenu que celui du fichier json en ligne
import SigneChinois from './SigneChinois';
import { getSign } from './helpers';
import Modal from './Modal';

function App() {
  const [sign, setSign] = useState('');
  const [signIndex, setSignIndex] = useState(0);
  // "therme" => 2 hooks ( methodes de react)
  const ipt = useRef();

  const [modalVisible, setModalVisible] = useState(false);

  const [signes, setSignes] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ltruchot/es3-to-esnext-challenges/master/011-horoscope_chinois/signes.json')
      .then((res) => res.json())
      .then((data) => setSignes(data));
  }, []);

  const signesComposants = signes.length > 0 ? signes.map((signe) => (
    <SigneChinois
      nom={signe.nom}
      image={signe.img}
      description={signe.description}
      key={signe.id}
    />

  )) : 'loading...';

  const calculateSign = () => {
    const val = Number(ipt.current.value);// ajoute le current /e/ pcq passe via useRef

    const idx = getSign(val);
    setSignIndex(idx);
    setSign(signes[idx].nom);

    setModalVisible(true);
  };

  return (
    <div>
      <div className="py-4 border-4 border-double text-center text-white rounded-lg bg-black ">
        <p>Quel est votre année de naissance ?</p>
        <br />
        <input className="bg-white text-black" ref={ipt} />
        <button type="button" className=" bg-red-600 w-20 ml-4 rounded-lg " onClick={calculateSign}>
          Valider
        </button>

      </div>
      <div className="m-3 rounded-md flex flex-wrap bg-yellow-200 ">
        {signesComposants}
      </div>
      { signes[signIndex] ? (
        <Modal close title=" Ton signe astrologique chinois est : " visible={modalVisible} hiddenModal={() => setModalVisible(false)} type="info">
          <h2 className="mt-2 text-center capitalize">{sign} </h2>
          <br />
          <p>{signes[signIndex].description}</p>

        </Modal>
      ) : null }

    </div>

  );
}

export default App;
