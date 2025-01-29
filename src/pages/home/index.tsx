import { Social } from "../../components/social"
import {FaLinkedin, FaMedium, FaInstagram} from "react-icons/fa"
export function Home() {
    return (
        <div className="flex flex-col w-full py-4 items-center justify-center">
            <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">Eduardo Dahmer Correa</h1>
            <span className="text-gray-50 mb-5 mt-3">Veja meus Links 👇</span>
            <main className="flex flex-col w-11/12 max-w-xl text-center">
                <section className="bg-white mb-4 w-full py-2 rounded-lg selec-nome transition-transform hover:scale-105 cursor-pointer">
                    <a>
                      <p className="text-base md:text-lg">
                        Artigos Linkedin
                      </p>  
                    </a>
                </section>
                <footer className="flex justify-center gap-3 my-4">
                    <Social url="https://www.instagram.com/eduardodahmer_dev/">
                        <FaInstagram size={35} color="#FFF"/>
                    </Social>

                    <Social url="https://www.linkedin.com/pulse/o-que-%C3%A9-jwt-e-como-ele-funciona-eduardo-dahmer-correa-igwaf/">
                        <FaLinkedin size={35} color="#FFF"/>
                    </Social>

                    <Social url="https://medium.com/p/47cf78103c50/">
                        <FaMedium size={35} color="#FFF"/>
                    </Social>
                </footer>
            </main>
        </div>
        
    )
}