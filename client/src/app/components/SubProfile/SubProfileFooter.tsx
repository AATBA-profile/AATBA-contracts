type Props = { cn?: string }

const SubProfileFooter = ({ cn }: Props) => {
    return (
        <div className={`${cn}h-24 w-full rounded-b-[1.7rem] backdrop-blur-lg backdrop-brightness-50`}>
            <h3 className="text-md py-1.5 pl-4 font-semibold text-white">Achievements</h3>
            <div className="mx-4 flex h-12 w-12 items-center justify-center rounded-2xl border text-xs text-white">BATCH</div>
        </div>
    )
}

export default SubProfileFooter
