import Image from "next/image";
import styles from "./page.module.css";

const POTATO_CAT_LINK = "https://m.media-amazon.com/images/I/610wXa0Z12S._AC_UF1000,1000_QL80_.jpg"

const DAY_NAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

const CLASS_TIMES = ["8am - 10am", "10am - 12pm", "12pm - 2pm", "2pm - 4pm", "4pm - 6pm"]

const MONDAY = 0
const WEDNESDAY = 2

const NOON = 2
const AFTERNOON = 3

var personal_schedule = [
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
]

personal_schedule[MONDAY][NOON] = "CS 493"
personal_schedule[WEDNESDAY][NOON] = "CS 493"

personal_schedule[MONDAY][AFTERNOON] = "CS 494"
personal_schedule[WEDNESDAY][AFTERNOON] = "CS 494"

for (let rowIndex = 0; rowIndex < 5; rowIndex++) {
  personal_schedule[rowIndex] = [DAY_NAMES[rowIndex], ...personal_schedule[rowIndex]]
}

/*
{
  [MONDAY, NOON]: "CS 493",
  [WEDNESDAY, AFTERNOON]: "CS 494",
}
*/

function classTableRow(items) {
  return <tr>
    {items.map((text) => <td>{text}</td>)}
  </tr>
}

function classTable() {
  return <div className={"bg-red-500 animate-spin"}><table className={styles.table}>
    {classTableHeader(["", ...CLASS_TIMES])}
    {classTableBody()}
  </table></div>
}

function classTableHeader(items) {
  return <thead className={styles.tr}><tr className={styles.tr}>{items.map((text) => <td className={styles.tr}>{text}</td>)}</tr></thead>
}

function classTableBody() {
  return <tbody>{personal_schedule.map(classTableRow)}</tbody>
}

function list() {
  return (<ol>
      <li>Write the numbers down</li>
      <li>Type them into a calculator</li>
      <li>Hit enter</li>
      <li>Look at the answer</li>
    </ol>)
}

function howToDo() {
  return <div>
    <h4>How to do mental math:</h4>
  </div>
}

function assignment() {
  return <div>
    <h className="bg-green-100 animate-ping">Welcome!</h>
    <p className="text-yellow-100 animate-pulse">My name is Joey. I'm a programmer. Nice to meet you.</p>
    <div>{howToDo()}</div>
    <div>{list()}</div>
    {classTable()}
    <img classname="bg-red-500 animate-spin" src={POTATO_CAT_LINK}></img>
  </div>
}

/*
function assignment() {
  return <div>
    <h>Welcome!</h>
    <p>My name is Joey. I'm a programmer. Nice to meet you.</p>
    <table>
      <thead>
        <tr>
          <td>
            monday
          </td>
          <td>
            a
          </td>
          <td>
            a
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            a
          </td>
          <td>
            a
          </td>
          <td>
            a
          </td>
        </tr>
      </tbody>
    </table>
    <img src={potato_cat_link}></img>
  </div>
}
*/

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {assignment()}
      </div>
    </main>
  );
}

/*
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
*/
