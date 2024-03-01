import React from 'react'
import { useState } from 'react'

export default function Personagem() {

    const [perso, setPerso] = useState();
    const [nome, setNome] = useState();
  
    function perso1() {
      setPerso("https://media.tenor.com/ijk4K677nEkAAAAe/jing-yuan-honkai-star-rail-jing-yuan.png");
      setNome("Jing Yuan");
    }
    function perso2() {
      setPerso("https://media.tenor.com/FWMyx0gi6kgAAAAe/blade-honkai-star-rail.png");
      setNome("Blade");
    }
    function perso3() {
      setPerso("https://media.tenor.com/WiYGZYBNWfMAAAAe/kafka-honkai-star-rail.png");
      setNome("Kafka");
    }
  

  return (
    <>
    <div className='Cards'>
      <section>
      <h1>Veja o personagem em chibi!</h1>

      <figure>
            <img src="https://wotpack.ru/wp-content/uploads/2023/03/1-55.jpg" alt="" />
            <figcaption>Jing Yuan</figcaption>
            <button onClick={perso1}>Clique aqui!</button>
      </figure>
      <figure>
            <img src="https://upload-os-bbs.hoyolab.com/upload/2022/05/25/172534910/db3395782a3c9856e9d23911fa9ef9b8_4914741530404040000.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80" alt="" />
            <figcaption>Blade</figcaption>
            <button onClick={perso2}>Clique aqui!</button>
      </figure>
      <figure>
            <img src="https://news.codashop.com/ph/wp-content/uploads/sites/5/2023/09/HSR-Kafka-Character-Banner.jpg" alt="" />
            <figcaption>Kafka</figcaption>
            <button onClick={perso3}>Clique aqui!</button>
      </figure>
      </section>

      <div className='result'>
        <p>Resultado!</p>
        <img src={perso} alt=""></img> 
        <p>{nome}</p>
      </div>
    </div>
    </>
  )
}
