interface TagProps {
    text: string;
    color: string;
}

export default function Tag({ text, color }: TagProps) {
    return (
        <p className={`px-2 ${color} rounded-2xl`}>{text}</p>
    );
}