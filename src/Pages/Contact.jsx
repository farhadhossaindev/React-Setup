import { Input, Textarea } from "@nextui-org/react";
import React from "react";

function Contact() {
    const [value, setValue] = React.useState("");
    return (
        <div className='flex justify-center items-center h-[90vh] text-5xl font-bold text-black'>

            <div className="w-[35%]">
                <Input type="email" label="Name" />
                <Input className="mt-5" type="email" label="Email" />

                <div className="mt-5">
                    <Textarea
                        variant="underlined"
                        label="Description"
                        labelPlacement="outside"
                        placeholder="Enter your description"
                        value={value}
                        onValueChange={setValue}
                    />
                   
                </div>

            </div>

        </div>
    )
}

export default Contact