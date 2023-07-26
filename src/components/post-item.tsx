import { PostTitle } from '@/components/post-title';
import { PostDetail } from '@/components/post-detail';
import { PostBody } from '@/components/post-body';

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"

export function PostItem() {
    return (
        <div className="p-10">
            <PostTitle>Post Title</PostTitle>
            <PostDetail>2023-06-26</PostDetail>
            <PostBody>{loremIpsum}</PostBody>
        </div>
    );
}