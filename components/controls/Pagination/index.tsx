import { IPagination } from "lib/types";
import Link from "next/link";

const Pagination = ({ current, items, path }: IPagination): JSX.Element => {
  const prevPost = current - 1 >= 0 ? items[current - 1] : null;
  const nextPost = current + 1 < items.length ? items[current + 1] : null;

  return (
    <nav className="pagination-nav py-10">
      <ul className="flex justify-between">
        <li className="prev">
          {prevPost && (
            <Link
              as={`${path}/${prevPost.slug}`}
              href={`/${path}/[slug]`}
              className="font-display font-medium hover:underline lg:text-xl"
            >
              {prevPost.title}
            </Link>
          )}
        </li>
        <li className="next">
          {nextPost && (
            <Link
              as={`/${path}/${nextPost.slug}`}
              href={`/${path}/[slug]`}
              className="font-display font-medium hover:underline lg:text-xl p-3"
            >
              {nextPost.title}
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
