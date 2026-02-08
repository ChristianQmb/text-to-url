"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveText } from "@/lib/storage";

export default function Create(){
    const [text, setText] = useState('');
    const router = useRouter();

    const handleSubmit =(e: React.FormEvent) => {
        e.preventDefault();
        if(text.trim()){
            const id = saveText(text);
            router.push(`/display/${id}`)
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a story"
                maxLength={10000}
                style={{width: '100%', minHeight:'200px'}}
                ></textarea>
                <div style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
                    {text.length} / 10,000 characters
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}