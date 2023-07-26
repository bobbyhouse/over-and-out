import { IPostTitle } from '@/types';

export function PostTitle(props: IPostTitle) {
    return (
        <div className="mb-2 text-left">
            <h1 className="text-4xl font-bold">{props.children}</h1>
        </div>
    );
}