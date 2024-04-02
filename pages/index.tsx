import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster, toast } from "react-hot-toast";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from "eventsource-parser";

import Toggle from "../components/Toggle";
import ToggleTemplate from "../components/ToggleTemplate";
import DropDownDomain, { DomainType } from "../components/DropDownDomain";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [userPrompt, setuserPrompt] = useState("");
  const [tasks, setTasks] = useState("");
  const [domain, setDomain] = useState<DomainType>("Business");
  const [generatedPrompt, setGeneratedPrompt] = useState<String>("");
  const [isGPT, setIsGPT] = useState(false);
  const [isPRMT, setIsPRMT] = useState(false);

  const PromptRef = useRef<null | HTMLDivElement>(null);

  const scrollToPrompt = () => {
    if (PromptRef.current !== null) {
      PromptRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  //DomainType = 'Business' | 'Science' | 'Software Engineering'| 'Management' | 'Strategy';
  const promptPRMT = `As CoachGPT, an esteemed ${domain} authority with over two decades of elite coaching experience, your consultation fees command tens of thousands of dollars per hour.
  Your roles encompass:
  - (1) To ask me the right questions
  - (2) To confront me with my inconsistencies
  - (3) To guide me towards the best decisions
  - (4) To understand my challenges, even the most complex
  - (5) To give me exact answers and process to follow
  - (6) Guide me step by step on how to achieve my goals
  - (7) Tailor your answers for my needs
  - (8) Give me practical and actionable ideas on how to achieve my goal.
  
  Now, I present you with a challenge based on the following client's prompt:
  "${userPrompt}"

  here are the tasks you have to fullfill:
  
  - (1) guide the client towards the best decisions possible to achieve his goal
  - (2) give exact answers and process to follow with examples
  - (3) Guide step by step on how to achieve the goal
  - (4) Tailor your answers for the needs of the client
  - (5) Give practical and actionable ideas on how to achieve the goal.
  
  I urge you to :
  - Employ your keen intellect, attention to detail, and comprehensive understanding
  - Take the necessary time to craft an optimal solution.
  - Leverage your vast knowledge and advanced methodologies to provide a response that exceeds standard outputs tenfold.
  
  Remember that your insights will undergo expert scrutiny, requiring adherence to industry best practices and robust logical underpinnings. 
  Substantiate your answers with credible sources for validation.`;

  const promptPRTF = `"Acting as a ${domain} expert, with over two decades of elite coaching experience, your consultation fees command tens of thousands of dollars per hour.
  Your roles encompass:
  - (1) To ask me the right questions
  - (2) To confront me with my inconsistencies
  - (3) To guide me towards the best decisions
  - (4) To understand my challenges, even the most complex
  - (5) To give me exact answers and process to follow
  - (6) Guide me step by step on how to achieve my goals
  - (7) Tailor your answers for my needs
  - (8) Give me practical and actionable ideas on how to achieve my goal.
  
  Now, I present you with a challenge based on the following client's prompt:
  
  "${userPrompt}".

  here are the tasks you have to fullfill:
  
  - (1) guide the client towards the best decisions possible to achieve his goal
  - (2) give exact answers and process to follow with examples
  - (3) Guide step by step on how to achieve the goal
  - (4) Tailor your answers for the needs of the client
  - (5) Give practical and actionable ideas on how to achieve the goal.
  
  I urge you to :
  - Employ your keen intellect, attention to detail, and comprehensive understanding
  - Take the necessary time to craft an optimal solution.
  - Leverage your vast knowledge and advanced methodologies to provide a response that exceeds standard outputs tenfold.
  
  Remember that your insights will undergo expert scrutiny, requiring adherence to industry best practices and robust logical underpinnings. 
  Substantiate your answers with credible sources for validation.
  Present your strategy in a visually engaging presentation format.`;
  
  var prompt = "";
  /* console.log({ prompt });
  console.log({ generatedPrompt });
 */
  if (isPRMT) {
    prompt = promptPRMT;
  } else {
    prompt = promptPRTF;
  }
  
  async function generatePrompt(e: any) {
    e.preventDefault();

    setGeneratedPrompt(prompt);
    setLoading(true);
    /*     const response = await fetch(isGPT ? "/api/openai" : "/api/mistral", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    }); */
    /*     if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    } */
    /*
    const onParseGPT = (event: ParsedEvent | ReconnectInterval) => {
      if (event.type === "event") {
        const data = event.data;
        try {
          const text = JSON.parse(data).text ?? "";
          setGeneratedPrompt((prev) => prev + text);
        } catch (e) {
          console.error(e);
        }
      }
    };

    const onParseMistral = (event: ParsedEvent | ReconnectInterval) => {
      if (event.type === "event") {
        const data = event.data;
        try {
          const text = JSON.parse(data).choices[0].text ?? "";
          setGeneratedPrompt((prev) => prev + text);
        } catch (e) {
          console.error(e);
        }
      }
    };

    const onParse = isGPT ? onParseGPT : onParseMistral; */
    /* not calling the API for now */
    // https://web.dev/streams/#the-getreader-and-read-methods
    /*     const reader = data.getReader();
    const decoder = new TextDecoder();
    const parser = createParser(onParse);
    let done = false;
    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      parser.feed(chunkValue);
    } */
    scrollToPrompt();
    setLoading(false);
    console.log(prompt);
  }

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Improved Prompt Generator</title>
        <link rel="icon" href="/star.ico" />
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <p className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out">
          <b>27,061,984</b> improved prompts generated so far (presumably)
        </p>
        <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-slate-900">
          Life is short,
        </h1>
        <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-slate-900">
          use better prompts
        </h1>
        {/* choosing the AI to work with Mixtral or GPT */}
{/*         <div className="mt-7">
          <Toggle isGPT={isGPT} setIsGPT={setIsGPT} />
        </div>*/}

        {/* choosing the prompt template to work with PRTM or RTF*/}
        <div className="mt-7">
          <ToggleTemplate isPRMT={isPRMT} setIsPRMT={setIsPRMT} />
        </div>

        {/* the prompt */}
        {/* TODO:add space and a horizontal divider */}
      </main>
      {/* <main className="w-full max-w-md space-y-4 duration-1200 ease-in-out animate-in fade-in slide-in-from-bottom-4">
        <form className="flex h-fit w-full flex-row items-center rounded-xl bg-black px-1 shadow-lg">
          <input
            type="text"
            placeholder="cat"
            className="h-10 w-full resize-none bg-transparent px-2 font-mono text-base text-white placeholder:text-gray-400 sm:text-sm border-0 outline-none ring-0 focus:ring-0 transition-all duration-300"
            name="prompt"
            onChange={(e) => setuserPrompt(e.target.value)}
            value={userPrompt}
          />
          <button
            type="submit"
            aria-disabled="false"
            className="flex aspect-square h-8 w-8 items-center justify-center rounded-lg text-white outline-0 ring-0 hover:bg-white/25 focus-visible:bg-white/25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-corner-down-left shrink-0 -ml-px"
            >
              <polyline points="9 10 4 15 9 20"></polyline>
              <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
            </svg>
          </button>
        </form>
      </main> */}
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
{/*         <h2 className="sm:text-3xl text-4xl max-w-[708px] font-bold text-slate-900">
          let's build the prompt
        </h2> */}

        {/* the domain */}
        <div className="max-w-xl w-full">
          <div className="flex mb-5 items-center space-x-3">
            <Image src="/1.svg" width={30} height={30} alt="1st step" />
            <p className="text-left font-medium">
              Select the domain of expertise
            </p>
          </div>
          <div className="block">
            <DropDownDomain
              domain={domain}
              setDomain={(newDomain) => setDomain(newDomain)}
            />
          </div>

          {/* the problem description */}
          <div className="flex mt-10 items-center space-x-3">
            <Image
              src="/2.svg"
              width={30}
              height={30}
              alt="2nd step"
              className="mb-5 sm:mb-0"
            />
            <p className="text-left font-medium">
              Drop in the problem you are facing{" "}
              <span className="text-slate-500">
                (or the one you are trying to solve)
              </span>
              .
            </p>
          </div>
          <textarea
            value={userPrompt}
            placeholder={"I want to be a millionnaire but I don't know how."}
            /*             defaultValue={"I want to be a millionnaire but I don't know how!!"} */
            onChange={(e) => setuserPrompt(e.target.value)}
            rows={4}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
          />

          {/* the tasks */}
          {/*           <div className="flex mt-10 items-center space-x-3">
            <Image
              src="/3.svg"
              width={30}
              height={30}
              alt="3rd step"
              className="mb-5 sm:mb-0"
            />
            <p className="text-left font-medium">
              What are you expecting from the AI assisstant ?{" "}
              <span className="text-slate-500">(list the tasks)</span>.
            </p>
          </div>
          <textarea
            value={tasks}
            placeholder={
              "(1) give me a list of business ideas (2) tell me what to do (3) Give me a action plan"
            }
            defaultValue={
              "(1) give me a list of business ideas (2) tell me what to do (3) Give me a action plan"
            }
            onChange={(e) => {
              setTasks(e.target.value);
              console.log(e.target.value);
            }}
            rows={4}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
          /> */}

          {/* The generator ! */}
          {!loading && (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              onClick={(e) => generatePrompt(e)}
            >
              Generate your prompt &rarr;
            </button>
          )}
          {loading && (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              disabled
            >
              <LoadingDots color="white" style="large" />
            </button>
          )}
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
        <div className="space-y-10 my-10">
          {generatedPrompt && (
            <>
              <div>
                <h2
                  className="sm:text-4xl text-3xl font-bold mx-auto"
                  ref={PromptRef}
                >
                  Your generated Prompt
                </h2>
              </div>
              <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
                <div className="text-left bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border display-linebreak">
                  <p style={{whiteSpace: 'pre-line'}}>{generatedPrompt}</p>
                  {/* add an action onclick when the user clicks on the toaster, the text is copied to the clipboard */}
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default Home;
