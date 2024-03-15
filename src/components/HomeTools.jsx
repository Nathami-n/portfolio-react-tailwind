import Marquee from "react-fast-marquee";
const HomeTools = () => {
  return (
    <section
      className="
    w-full
    h-screen
    mt-10
    "
    >
      <div
        className="
        h-full
        w-full
        flex
        flex-col
        gap-3
        lg:grid
        lg:px-4
        lg:grid-cols-12
        p-3
        relative
        "
      >
        <div
          className="
            card
            h-[350px]
            p-6
            lg:col-span-6
            "
        >
          <h1
            className="
                text-3xl
                text-white
                font-bold
                mb-6
                "
          >
            *About{" "}
            <span
              className="
                    text-orange-600
                    "
            >
              me
            </span>
          </h1>
          <p
            className="
                text-[#cdcdcd]
                text-lg
                mt-[50px]
                "
          >
            Want to know about me and my skillset? Click on the card that you
            are hovering hover
          </p>
          <div
            className="
                text-white
                absolute
                right-5
                top-[300px]
            
                "
          >
            button
          </div>
        </div>
        <div
          className="
            card
            h-[350px]
            p-3
            flex
            flex-col
            lg:col-span-6
            gap-9
            "
        >
          <h1
            className="
                text-white
                font-bold
                text-3xl
                text-center
                "
          >
            Technologies I{" "}
            <span
              className="
                text-orange-600
                "
            >
              use
            </span>
          </h1>
          <div
            className="
            mt-9
            mx-auto
            w-[70%]
            
            "
          >
            <Marquee pauseOnHover>
              <div
                className="
           flex
           gap-12
           "
              >
                <div
                  className="
                    text-blue-300
                    text-xl
                    font-bold
                    uppercase
                    border
                    p-4
                    m-1
                    rounded-xl
                    ml-8

                    "
                >
                  React
                </div>
                <div
                  className="
                    text-sky-500
                    text-xl
                    font-bold
                    uppercase
                    border
                    p-4
                    m-1
                    cursor-pointer
                    rounded-xl
                    

                    "
                >
                  NextJs
                </div>
                <div
                  className="
                    text-purple-400
                    text-xl
                    font-bold
                    uppercase
                    border
                    p-4
                    m-1
                    rounded-xl
                    

                    "
                >
                  Tailwindcss
                </div>
                <div
                  className="
                    text-rose-500
                    text-xl
                    font-bold
                    uppercase
                    border
                    p-4
                    m-1
                    rounded-lg
                  

                    "
                >
                  Node
                </div>
                <div
                  className="
                    text-green-400
                    text-xl
                    font-bold
                    uppercase
                    border
                    p-4
                    m-1
                    rounded-xl
                    

                    "
                >
                  MongoDB
                </div>
              </div>
            </Marquee>
            <div
              className="
    mt-3
    "
            >
              <Marquee autoFill pauseOnHover direction="right">
                <div
                  className="
            flex
            gap-12
            "
                >
                  <div
                    className="
                    text-yellow-600
                    text-xl
                    font-bold
                    uppercase
                    border
                    p-5
                    m-1
                    rounded-xl
                    
                    ml-8

                    "
                  >
                    SQL
                  </div>
                  <div
                    className="
                    text-orange-800
                    text-xl
                    font-bold
                    uppercase
                    border
                    p-4
                    m-1
                    rounded-xl
                   

                    "
                  >
                    JAVASCRIPT
                  </div>
                  <div
                    className="
                    text-purple-900
                    text-xl
                    font-bold
                    uppercase
                    border
                    p-4
                    rounded-xl
                   
                    "
                  >
                    REDUX
                  </div>
                  <div
                    className="
                    text-rose-900
                    text-xl
                    font-bold
                    uppercase
                    border
                    p-4
                    rounded-xl
                    
                    "
                  >
                    C/C++/C#/JAVA
                  </div>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTools;
