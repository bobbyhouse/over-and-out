import { IPostDetail } from '@/types';

export function PostDetail(props: IPostDetail) {
    return (
        <div className="mb-4 text-left">
            <p>{props.children}</p>
        </div>
    )
}