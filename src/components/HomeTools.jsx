

const HomeTools = () => {
  return (
    <section 
    className="
    w-full
    h-screen
    mt-10
    ">
        <div className="
        h-full
        w-full
        flex
        flex-col
        gap-3
        p-3
        relative
        ">
            <div className="
            card
            h-[350px]
            p-6
            ">
                <h1 className="
                text-3xl
                text-white
                font-bold
                mb-6
                ">
                    *About <span className="
                    text-orange-600
                    ">
                        me</span>
                </h1>
                <p className="
                text-[#cdcdcd]
                text-lg
                mt-[50px]
                ">
                    Want to know about me and my skillset? Click on the card that you are hovering hover
                    Click on the card
                </p>
                <div className="
                text-white
                absolute
                right-5
                top-[300px]
            
                ">button</div>
            </div>
            <div className="
            card
            h-[350px]
            p-3
            ">
                <h1 className="
                text-white
                font-bold
                text-3xl
                text-center
                "
                >Technologies I <span className="
                text-orange-600
                ">use</span></h1>

            </div>
        </div>
    </section>
  )
}

export default HomeTools