import React from "react";
import "./style.css";

export const Onboarding = () => {
  return (
    <div className="onboarding">
      <div className="overlap">
        <img
          className="unsplash"
          alt="Unsplash"
          src="https://c.animaapp.com/m8yr9njrkVYDCN/img/unsplash-q8u1ygbarqk.png"
        />

        <div className="ellipse" />

        <div className="frame">
          <div className="frame-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper">Quiero crear mi cuenta</div>
            </div>
          </div>

          <div className="div">
            <div className="div-wrapper">
              <div className="text-wrapper-2">Tengo Banca Digital</div>
            </div>
          </div>
        </div>

        <div className="group">
          <div className="overlap-group">
            <img
              className="img"
              alt="Group"
              src="https://c.animaapp.com/m8yr9njrkVYDCN/img/group.png"
            />
          </div>
        </div>

        <div className="frame-2">
          <div className="frame-3">
            <img
              className="lucide-circle-check"
              alt="Lucide circle check"
              src="https://c.animaapp.com/m8yr9njrkVYDCN/img/lucide-circle-check.svg"
            />

            <p className="p">Beneficio de tu nueva cuenta A</p>
          </div>

          <div className="frame-3">
            <img
              className="lucide-circle-check"
              alt="Lucide circle check"
              src="https://c.animaapp.com/m8yr9njrkVYDCN/img/lucide-circle-check.svg"
            />

            <p className="p">Beneficio de tu nueva cuenta B</p>
          </div>

          <div className="frame-3">
            <img
              className="lucide-circle-check"
              alt="Lucide circle check"
              src="https://c.animaapp.com/m8yr9njrkVYDCN/img/lucide-circle-check.svg"
            />

            <p className="p">Beneficio de tu nueva cuenta C</p>
          </div>
        </div>

        <p className="bienvenido-abramos">
          <span className="span">Bienvenido,</span>

          <span className="text-wrapper-3">
            {" "}
            abramos juntos tu nueva cuenta.
          </span>
        </p>

        <div className="text-wrapper-4">Beneficios</div>
      </div>
    </div>
  );
};
