export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-700 shadow rounded-lg">
            {/*p-4 rounded-lg dark:bg-gray-700 dark:text-white h-72 focus:border-gray-800*/}
            <div className="p-4 bg-gray-700 rounded-lg shadow">
                <div>
                    <h2 className="text-white-800 text-4xl">About Project</h2>
                    <p className="text-white-800 text-sm mt-4">
                        Hi there! This is just a simple compiler project that I created just for fun. It does not do
                        much,
                        but it does demonstrate the basic concepts of a compiler. It is written in TypeScript.
                        The project is open source and can be found on <a className="text-sky-500"
                                                                          href="https://github.com/codyafingerson/SimpleCompiler"
                                                                          target="_blank"
                                                                          rel="noopener noreferrer">GitHub</a>.
                    </p>
                </div>

                <hr className="my-4 border-t border-gray-200"/>

                <div>
                    <h2 className="text-white-800 text-4xl">Information</h2>
                    <p className="text-white-800 text-sm mt-4">
                        Stay tuned... more information coming soon!
                    </p>
                </div>

                <hr className="my-4 border-t border-gray-200"/>
                <div>

                    <h2 className="text-white-800 text-4xl">Grammar</h2>
                    <p className="text-white-800 text-sm mt-4">
                        Grammar coming soon...
                        For now, view the source code.
                    </p>
                </div>
            </div>
        </div>
    );

}