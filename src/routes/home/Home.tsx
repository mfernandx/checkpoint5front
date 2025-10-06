import fotohospital from '/fotohospital.jpeg'
import fotoequipe from '/fotoequipe.jpg'

export default function Home(){
    return(
        <>
        <section className='flex'>

            <section className='block p-15'>

                <section className=" items-center w-[800] flex justify-center">
                    <h2 className="text-6xl font-semibold w-[800] text-justify"> Inauguração do Hospital <br></br>Vida Plena.</h2>
                </section>

                <section className=" w-[700] flex justify-center mt-[25px] ml-[20px]">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> A nova unidade promete reduzir o tempo de espera e aumentar a precisão dos diagnósticos. O investimento em equipamentos de última geração reforça o compromisso do hospital com a qualidade e segurança dos pacientes.</h4>
                </section>

            </section>   

                <section className='block'>
                    <img className="w-200"src={fotohospital} />
                </section>

        </section>

        <section className='h-[20px] bg-[#0077C8] mb-[20px]'></section>

        <section className='flex mb-[20px]'>

            <section className='block p-15'>

                <section className=" items-center w-[800] flex justify-center mr-[30px]">
                    <h2 className="text-6xl font-semibold w-[800] text-justify"> Possuímos uma equipe<br></br> altamente especializada</h2>
                </section>

                <section className=" w-[700] flex justify-center mt-[25px] ml-[20px]">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> No Hospital Vida Plena, o cuidado com o paciente vai muito além da tecnologia e da infraestrutura. O verdadeiro diferencial está nas pessoas que fazem parte da equipe — profissionais comprometidos com a saúde, o acolhimento e a qualidade do atendimento.</h4>
                </section>

            </section>   

                <section className='block'>
                    <img className="w-200"src={fotoequipe} />
                    
                </section>


        </section>
        </>
    )

}