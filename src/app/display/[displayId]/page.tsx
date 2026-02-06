"use client";
import { useParams } from "next/navigation";
import { getText } from "@/lib/storage";
import Link from "next/link";


export default function Display(){
    const params= useParams();
    const displayId = params.displayId as string;
    const text = getText(displayId);

    return (
    <div style={{ width: '100%' }}>
      <h1 style={{ margin: '0px', padding: '0px' }}>Display</h1>
      {text ? (
        <div>
          <pre className="text" style={{whiteSpace:"pre-wrap"}} >
            {text}
          </pre>
          <Link href="/create">Create another</Link>
        </div>
      ) : (
        <p>Text not found</p>
      )}
    </div>
  );
}