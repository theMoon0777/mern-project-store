import React, { useEffect, useState } from "react";
import "./index.css";
import {Model} from "./comp";
import axios from "axios";

export const Index = () => {
  const locations = [
    {
      name: "barcelona",
      src: "https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1.png"
    },
    {
      name: "mardrid",
      src: "https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-6@2x.png"
    },
    {
      name: "barcelona",
      src: "https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1.png"
    },
    {
      name: "mardrid",
      src: "https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1-3.png"
    },
    {
      name: "barcelona",
      src: "https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1.png"
    }
  ];
  const [title, setTitle] = useState("");
  useEffect(() => {
    axios.post("http://127.0.0.1:8000/api/resources").then(res => {
      setTitle(res.data.success);
    })
  }, [])
  return (
    <div className="index">
      <h1>{title}</h1>
      <div className="MELI-HEADER">
        <div className="search-bar" />
      </div>
      <div className="HERO">
        <div className="frame">
          <div className="ellipse" />
          <div className="div" />
          <div className="div" />
          <div className="div" />
          <div className="div" />
        </div>
        <div className="SETA">
          <img
            className="seta"
            alt="Seta"
            src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/seta-1.svg"
          />
        </div>
        <div className="seta-wrapper">
          <img
            className="img"
            alt="Seta"
            src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/seta-1-1.svg"
          />
        </div>
      </div>
      <div className="CONTAINER">
        <div className="MODULE">
          <div className="banner" />
          <div className="banner-x" />
          <div className="banner-2" />
        </div>
        <div className="TXT">
          <div className="txt-titulo">
            <div className="text-wrapper">Viajar é para todos!</div>
            <div className="txt-titulo-2">Pacotes com preços imbatíveis</div>
          </div>
        </div>
      </div>
      <div className="CONTAINER-2">
        <div className="FILTER">
          <div className="FILTER-wrapper">
            <div className="FILTER-2">
              <div className="filter-box">
                <div className="text-wrapper-2">Local de partida</div>
                <div className="text-wrapper-3">São Paulo</div>
              </div>
              <div className="filter-box">
                <div className="text-wrapper-2">Quantidade diárias</div>
                <div className="text-wrapper-3">3 diárias</div>
              </div>
              <div className="filter-box">
                <img
                  className="ARROW"
                  alt="Arrow"
                  src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/arrow.svg"
                />
                <div className="text-wrapper-2">Pacotes</div>
                <div className="text-wrapper-3">1</div>
                <img
                  className="ARROW-2"
                  alt="Arrow"
                  src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/arrow-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="TXT">
          <div className="txt-titulo">
            <p className="text-wrapper">Encontre o pacote certo pra você</p>
          </div>
        </div>
      </div>
      <div className="CONTAINER-3">
        <div className="txt-titulo-wrapper">
          <div className="div-wrapper">
            <p className="p">Veja todas as opções de pacote</p>
          </div>
        </div>
        <div className="CONTAINER-4">
          <div className="MODULE-2">
            {/* <div className="model-sku">
              <div className="image">
                <div className="tag-nacional">
                  <div className="text-wrapper-4">Nacional</div>
                </div>
              </div>
              <div className="content">
                <div className="box">
                  <div className="destino">Jericoacara</div>
                </div>
                <div className="box-2">
                  <div className="text-wrapper-5">A partir de</div>
                  <div className="r">R$ 529</div>
                </div>
                <div className="box-3">
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Voo (ida e volta)</div>
                  </div>
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1-2.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Hospedagem</div>
                  </div>
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1-3.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Café da manhã</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="model-sku">
              <div className="image-3">
                <div className="tag-nacional">
                  <div className="text-wrapper-4">Nacional</div>
                </div>
              </div>
              <div className="content">
                <div className="box">
                  <div className="destino">Rio de Janeiro</div>
                </div>
                <div className="box-2">
                  <div className="text-wrapper-5">A partir de</div>
                  <div className="r">R$ 400</div>
                </div>
                <div className="box-3">
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Voo (ida e volta)</div>
                  </div>
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1-2.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Hospedagem</div>
                  </div>
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1-3.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Café da manhã</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="model-sku">
              <div className="image-4">
                <div className="tag-nacional">
                  <div className="text-wrapper-4">Nacional</div>
                </div>
              </div>
              <div className="content">
                <div className="box">
                  <div className="destino">São Paulo</div>
                </div>
                <div className="box-2">
                  <div className="text-wrapper-5">A partir de</div>
                  <div className="r">R$ 364</div>
                </div>
                <div className="box-3">
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Voo (ida e volta)</div>
                  </div>
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1-2.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Hospedagem</div>
                  </div>
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1-3.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Café da manhã</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="model-sku">
              <div className="image-5">
                <div className="tag-nacional">
                  <div className="text-wrapper-4">Nacional</div>
                </div>
              </div>
              <div className="content">
                <div className="box">
                  <div className="destino">Fortaleza</div>
                </div>
                <div className="box-2">
                  <div className="text-wrapper-5">A partir de</div>
                  <div className="r">R$ 382</div>
                </div>
                <div className="box-3">
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Voo (ida e volta)</div>
                  </div>
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1-2.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Hospedagem</div>
                  </div>
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1-3.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Café da manhã</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="model-sku">
              <div className="image-6">
                <div className="tag-internacional">
                  <div className="text-wrapper-4">Internacional</div>
                </div>
              </div>
              <div className="content">
                <div className="box">
                  <div className="destino">Barcelona</div>
                </div>
                <div className="box-2">
                  <div className="text-wrapper-5">A partir de</div>
                  <div className="r">R$ 2.280</div>
                </div>
                <div className="box-3">
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Voo (ida e volta)</div>
                  </div>
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1-2.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Hospedagem</div>
                  </div>
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1-3.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Café da manhã</div>
                  </div>
                </div>
              </div>
            </div> */}
            {locations.map((data, key) => (
              <Model val = {data} />
            ))}
           

          </div>
          <div className="TXT-2">
            <div className="div-wrapper">
              <div className="txt-titulo-3">Até 30% OFF</div>
            </div>
          </div>
        </div>
        <div className="CONTAINER-4">
          <div className="MODULE-2">
            <div className="model-sku">
              <div className="image-7">
                <div className="tag-nacional">
                  <div className="text-wrapper-4">Nacional</div>
                </div>
              </div>
              <div className="content">
                <div className="box">
                  <div className="destino">Gramado</div>
                </div>
                <div className="box-2">
                  <div className="text-wrapper-5">A partir de</div>
                  <div className="r">R$ 502</div>
                </div>
                <div className="box-3">
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Voo (ida e volta)</div>
                  </div>
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1-2.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Hospedagem</div>
                  </div>
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1-3.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Café da manhã</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="model-sku">
              <div className="image-8">
                <div className="tag-nacional">
                  <div className="text-wrapper-4">Nacional</div>
                </div>
              </div>
              <div className="content">
                <div className="box">
                  <div className="destino">Porto Alegre</div>
                </div>
                <div className="box-2">
                  <div className="text-wrapper-5">A partir de</div>
                  <div className="r">R$ 339</div>
                </div>
                <div className="box-3">
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Voo (ida e volta)</div>
                  </div>
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1-2.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Hospedagem</div>
                  </div>
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1-3.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Café da manhã</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="model-sku">
              <div className="image-9">
                <div className="tag-nacional">
                  <div className="text-wrapper-4">Nacional</div>
                </div>
              </div>
              <div className="content">
                <div className="box">
                  <div className="destino">Porto de Galinhas</div>
                </div>
                <div className="box-2">
                  <div className="text-wrapper-5">A partir de</div>
                  <div className="r">R$ 412</div>
                </div>
                <div className="box-3">
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Voo (ida e volta)</div>
                  </div>
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1-2.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Hospedagem</div>
                  </div>
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1-3.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Café da manhã</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="model-sku">
              <div className="image-10">
                <div className="tag-internacional">
                  <div className="text-wrapper-4">Internacional</div>
                </div>
              </div>
              <div className="content">
                <div className="box">
                  <div className="destino">Bogotá</div>
                </div>
                <div className="box-2">
                  <div className="text-wrapper-5">A partir de</div>
                  <div className="r">R$ 1.258</div>
                </div>
                <div className="box-3">
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Voo (ida e volta)</div>
                  </div>
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1-2.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Hospedagem</div>
                  </div>
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1-3.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Café da manhã</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="model-sku">
              <div className="image-11">
                <div className="tag-internacional">
                  <div className="text-wrapper-4">Internacional</div>
                </div>
              </div>
              <div className="content">
                <div className="box">
                  <div className="destino">Roma</div>
                </div>
                <div className="box-2">
                  <div className="text-wrapper-5">A partir de</div>
                  <div className="r">R$ 2.096</div>
                </div>
                <div className="box-3">
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Voo (ida e volta)</div>
                  </div>
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1-2.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Hospedagem</div>
                  </div>
                  <div className="topic">
                    <div className="image-wrapper">
                      <img
                        className="image-2"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/image-1-3.png"
                      />
                    </div>
                    <div className="text-wrapper-6">Café da manhã</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="TXT-2">
            <div className="div-wrapper">
              <div className="txt-titulo-3">Até 15% OFF</div>
            </div>
          </div>
        </div>
        <div className="bottom-wrapper">
          <div className="bottom">
            <div className="txt-sub">Veja tudo</div>
          </div>
        </div>
      </div>
      <div className="CONTAINER-5">
        <div className="IMG">
          <div className="image-12" />
          <div className="image-13">
            <div className="image-14" />
            <div className="image-15" />
          </div>
        </div>
        <div className="TXT-3">
          <div className="div-wrapper">
            <p className="txt-titulo-4">
              Independente de onde você esteja e para onde queira ir, conte sempre com a gente
            </p>
          </div>
          <div className="div-wrapper">
            <p className="txt-titulo-5">
              Com 123milhas, você não precisa ter milhas para comprar passagens com até 50% de desconto. Aqui somos nós
              que adquirimos milhas e as usamos para emitir passagens com desconto que você pode pagar via PIX, boleto
              ou cartão.
            </p>
          </div>
        </div>
      </div>
      <footer className="FOOTER">
        <div className="overlap-group">
          <img
            className="LINE"
            alt="Line"
            src="https://cdn.animaapp.com/projects/650d3f0ac369eea5e6d3ba7c/releases/650d442ab8355d4bbb0e95f0/img/line.svg"
          />
          <div className="BG" />
          <p className="text-wrapper-7">
            Massa erat volutpat gravida vel. Proin at mollis fusce sed nulla aliquam nulla.
          </p>
          <p className="text-wrapper-8">Cursus condimentum auctor scelerisque posuere ac eu volutpat</p>
          <div className="text-wrapper-9">Contato</div>
          <div className="text-wrapper-10">Políticas de privacidade</div>
          <div className="text-wrapper-11">Termos e condições</div>
          <div className="text-wrapper-12">Trabalhe conosco</div>
        </div>
      </footer>
    </div>
  );
};
