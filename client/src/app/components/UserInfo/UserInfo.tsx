import Image from "next/image"
import React from "react"
import { FaEthereum } from "react-icons/FA"
import { FiEdit } from "react-icons/FI"
import { Button } from "../ui/button"

type Props = {
    user: string
}

// ! DUMMY DATA
const ETHADDRESS = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"

const PIC = <div className="mx-5 flex h-24 w-24 items-center justify-center rounded-[1.7rem] border"> PIC </div>
const NAME = <p className="flex items-center justify-center text-2xl text-muted-foreground"> "No Name" Yet... </p>
const BUTTON: React.JSX.Element = (
    <Button size={"icon"} className="mx-5 flex items-center justify-center rounded-lg bg-muted/60 hover:bg-muted text-black dark:text-white">
        <FiEdit className="text-lg" />
    </Button>
)

const UserInfo = ({ user }: Props) => {
    return (
        <div className="flex h-32 items-center justify-between rounded-[2rem] bg-gradient-to-r from-[#FFE1D0] to-[#FFBCBC]">
            {/* profile pic */}
            <div className="mx-5 flex h-24 w-24 items-center justify-center rounded-[1.7rem]">
                <Image src="/pfp.png" height={200} width={200} alt="#" priority />
            </div>
            <div className="flex flex-1 flex-col items-start justify-center gap-2">
                {/* username */}
                {NAME}
                {/* symbol, address */}
                <div className="flex items-center justify-center gap-2 rounded-3xl">
                    <span className="rounded-full bg-[#FF8F5F] p-2">
                        <FaEthereum className="bg-[#FF8F5F]" />
                    </span>
                    <h3 className="text-[#FF8F5F] font-medium tracking-wider text-sm">
                        {user.substring(0, 5)}"..."{ETHADDRESS.substring(ETHADDRESS.length - 4)}
                    </h3>
                </div>
            </div>
            {BUTTON}
        </div>
    )
}

export default UserInfo
