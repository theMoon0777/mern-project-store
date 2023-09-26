export const Model = (props) => {

    return (
        <div className="model-sku" >
              <div className="image-6">
                <div className="tag-internacional">
                  <div className="text-wrapper-4">Internacional</div>
                </div>
              </div>
              <div className="content">
                <div className="box">
                  <div className="destino">{props.val.name}</div>
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
                        src={props.val.src}
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
    )
}