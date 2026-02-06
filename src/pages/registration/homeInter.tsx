import { useState } from "react";
import "./registration.css";


function HomeInter() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-accent p-4">
        <div className="w-full max-w-2xl">
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-elevated p-8 md:p-12 text-center animate-fade-in-up">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
                REGISTRATION FORM
              </h1>
              <h3 className="text-lg md:text-xl text-muted-foreground">
                International Citizen
              </h3>
            </div>
            <div className="text-left">
              <p>This page is under construction for international registration.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeInter;
