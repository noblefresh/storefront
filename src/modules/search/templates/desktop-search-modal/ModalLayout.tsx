import React from 'react'

export default function ModalLayout({children}) {
    return (
        <div className={`w-screen h-screen fixed right-0 z-[9] bg-gray-400 bg-opacity-30 backdrop-blur-lg flex items-center`}>
            <div className="w-full p-3">
                <div className="max-w-sm py-8 bg-white dark:bg-gray-900 mx-auto p-3 rounded-md">{children}</div>
            </div>
        </div>
    )
}