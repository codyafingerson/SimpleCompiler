import { ReactNode } from "react";

interface ContainerProps {
    info?: string;
    children?: ReactNode;
    header?: string;
}

export default function Container({children, info, header}: ContainerProps) {
    return (
        <div className="container mx-auto px-24 py-10 text-white">
            {header ? (
                <h1 className="text-xl mb-1">
                    {header}
                </h1>
            ) : null}

            {info ? (
                <p className="flex items-center bg-gray-500 rounded px-1 py-1 mb-5">
                    <i className="mr-1 ml-1 text-xl fa-solid fa-circle-info"/>
                    {info}
                </p>
            ) : null}


            {children}
        </div>
    );
}