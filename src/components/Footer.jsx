import React from "react";
import useTheme from "../Context/context";

function Footer() {
    const { fontColor, isDarkTheme } = useTheme();

    return (
        <>
            <div className="p-4 flex flex-col justify-center ml-4">
                <div>
                    <h1 className={`text-xl font-bold ${fontColor}`}>
                        Connect with me
                    </h1>
                    <hr
                        className=" mt-1"
                        style={{
                            color: "white",
                            backgroundColor: `${isDarkTheme ? "white" : "black"}`,
                            height: 2,
                            border: 0
                        }}
                    />
                </div>

                <div className="flex mt-4 justify-start gap-16 ml-7">
                    <a href="" target="_blank">
                        <img
                            src="https://imgs.search.brave.com/T5kVHXItENHThBjYAzb06GAbHymAM7PV-3FCfsPiZIA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/Z21haWwuc3Zn.svg"
                            alt="Gmail: 20031010.aman@gmail.com"
                            title="Gmail: 20031010.aman@gmail.com"
                            className=" h-10"
                        />
                    </a>
                    <a href="" target="_blank">
                        <img
                            src="https://imgs.search.brave.com/uGDtHsxME6trYi3Pg1IQoYBs0ZNStLg4fOwcz9gYrwo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
                            alt="Gmail: 20031010.aman@gmail.com"
                            title="LinkedIn : Aman Krishnarth"
                            className="h-10"
                        />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Footer;
