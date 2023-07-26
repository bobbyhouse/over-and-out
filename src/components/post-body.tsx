import { IPostBody } from '@/types';

export function PostBody(props: IPostBody) {
    return  (
        <div className="text-left">
            <p>{props.children}</p>
        </div>
    );
}