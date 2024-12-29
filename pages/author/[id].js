import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import data from "../../data/author.json";
import post from "../../data/post.json";
function Author() {

    let Router = useRouter()

    const [singleData, setSingleData] = useState(null);

    console.log(singleData);


    const { id } = Router.query;

    useEffect(() => {
        setSingleData(data.find((data) => data.id == id));
    }, [id]);
    return (<>
        <Layout>
            <main className="bg-grey pt-50 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* <!--author box--> */}
                            {singleData && (
                                <div className="author-bio mb-50 bg-white p-30 border-radius-10">
                                    <div className="author-image mb-30">
                                        <a href="/author">
                                            <img
                                                src={`/assets/imgs/authors/${singleData.img}`}
                                                alt=""
                                                className="avatar"
                                            />
                                        </a>
                                    </div>
                                    <div className="author-info">
                                        <h3 className="font-weight-900">
                                            <span className="vcard author">
                                                <span className="fn">
                                                    <a
                                                        href="/author"
                                                        title="Posts by Steven"
                                                        rel="author"
                                                    >
                                                        {singleData.title}
                                                    </a>
                                                </span>
                                            </span>
                                        </h3>
                                        <h5 className="text-muted">
                                            About author
                                        </h5>
                                        <div className="author-description text-muted">
                                            {singleData.desc}
                                        </div>
                                        <strong className="text-muted">
                                            Follow:{" "}
                                        </strong>
                                        <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                                            <li className="list-inline-item">
                                                <a
                                                    className="fb"
                                                    href="#"
                                                    target="_blank"
                                                    title="Facebook"
                                                >
                                                    <i className="elegant-icon social_facebook"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a
                                                    className="tw"
                                                    href="#"
                                                    target="_blank"
                                                    title="Tweet now"
                                                >
                                                    <i className="elegant-icon social_twitter"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a
                                                    className="pt"
                                                    href="#"
                                                    target="_blank"
                                                    title="Pin it"
                                                >
                                                    <i className="elegant-icon social_pinterest"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="post-module-2">
                                <div className="widget-header-2 position-relative mb-30  wow fadeInUp animated">
                                    <h5 className="mt-5 mb-30">
                                        Posted by Steven
                                    </h5>
                                </div>
                                <div className="loop-list loop-list-style-1">
                                    <div className="row">
                                        {post.slice(1, 3).map((item, i) => (
                                            <article
                                                className="col-md-6 mb-30 wow fadeInUp animated"
                                                data-wow-delay="0.2s"
                                            >
                                                <div className="post-card-1 border-radius-10 hover-up">
                                                    <div
                                                        className="post-thumb thumb-overlay img-hover-slide position-relative"
                                                        style={{
                                                            backgroundImage: `url(/assets/imgs/news/${item.img})`
                                                        }}
                                                    >
                                                        <Link href={`/blog/${item.id}`} className="img-link"></Link>
                                                        <span className="top-right-icon bg-success">
                                                            <i className="elegant-icon icon_camera_alt"></i>
                                                        </span>
                                                        <ul className="social-share">
                                                            <li>
                                                                <Link href="#">
                                                                    <i className="elegant-icon social_share"></i>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#" className="fb">
                                                                    <i className="elegant-icon social_facebook"></i>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#" className="tw">
                                                                    <i className="elegant-icon social_twitter"></i>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#" className="pt">
                                                                    <i className="elegant-icon social_pinterest"></i>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="post-content p-30">
                                                        <div className="entry-meta meta-0 font-small mb-10">
                                                            <Link href={`/blog/${item.id}`}>
                                                                <span className="post-cat text-info">
                                                                    {item.category}
                                                                </span>
                                                            </Link>
                                                            <Link href={`/blog/${item.id}`}>
                                                                <span className="post-cat text-success">
                                                                    {item.category}
                                                                </span>
                                                            </Link>
                                                        </div>
                                                        <div className="d-flex post-card-content">
                                                            <h5 className="post-title mb-20 font-weight-900">
                                                                <Link href={`/blog/${item.id}`}>
                                                                    {item.title}
                                                                </Link>
                                                            </h5>
                                                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                                <span className="post-on">
                                                                    {item.date}
                                                                </span>
                                                                <span className="time-reading has-dot">
                                                                    {item.readTime} mins read
                                                                </span>
                                                                <span className="post-by has-dot">
                                                                    {item.views} views
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="post-module-3">
                                <div className="loop-list loop-list-style-1">
                                {post.slice(1, 7).map((item, i) => (
                                            <article className="hover-up-2 transition-normal wow fadeInUp animated">
                                                <div className="row mb-40 list-style-2">
                                                    <div className="col-md-4">
                                                        <div className="post-thumb position-relative border-radius-5">
                                                            <div
                                                                className="img-hover-slide border-radius-5 position-relative"
                                                                style={{ backgroundImage: `url(/assets/imgs/news/${item.img})` }}
                                                            >
                                                                <Link href={`/blog/${item.id}`} className="img-link"></Link>
                                                            </div>
                                                            <ul className="social-share">
                                                                <li>
                                                                    <Link href="/#">
                                                                        <i className="elegant-icon social_share"></i>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/#" className="fb">
                                                                        <i className="elegant-icon social_facebook"></i>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/#" className="tw">
                                                                        <i className="elegant-icon social_twitter"></i>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/#" className="pt">
                                                                        <i className="elegant-icon social_pinterest"></i>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8 align-self-center">
                                                        <div className="post-content">
                                                            <div className="entry-meta meta-0 font-small mb-10">
                                                                <Link href={`/blog/${item.id}`}>
                                                                    <span className="post-cat text-primary">
                                                                        {item.category}
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <h5 className="post-title font-weight-900 mb-20">
                                                                <Link href={`/blog/${item.id}`}>
                                                                    {item.title}
                                                                </Link>
                                                                <span className="post-format-icon">
                                                                    <i className="elegant-icon icon_star_alt"></i>
                                                                </span>
                                                            </h5>
                                                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                                <span className="post-on">
                                                                    {item.date}
                                                                </span>
                                                                <span className="time-reading has-dot">
                                                                    {item.readTime} mins read
                                                                </span>
                                                                <span className="post-by has-dot">
                                                                    {item.views} views
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        ))}
                                </div>
                            </div>
                            <div className="pagination-area mb-30 wow fadeInUp animated">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-start">
                                        <li className="page-item">
                                            <Link href="/#" className="page-link">
                                                <i className="elegant-icon arrow_left"></i>
                                            </Link>
                                        </li>
                                        <li className="page-item active">
                                            <Link href="/#" className="page-link">01
                                                                                                    </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link href="/#" className="page-link">02
                                                                                                    </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link href="/#" className="page-link">03
                                                                                                    </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link href="/#" className="page-link">04
                                                                                                    </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link href="/#" className="page-link">
                                                <i className="elegant-icon arrow_right"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-4 primary-sidebar sticky-sidebar">
                            <div className="widget-area">
                                <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                                    <div className="widget-header-2 position-relative mb-30">
                                        <h5 className="mt-5 mb-30">
                                            Most popular
                                        </h5>
                                    </div>
                                    <div className="post-block-list post-module-1">
                                        <ul className="list-post">
                                            {post.slice(1, 5).map((item, i) => (
                                                <li className="mb-30 wow fadeInUp animated">
                                                    <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                                                        <div className="post-content media-body">
                                                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                                <Link href={`/blog/${item.id}`}>
                                                                    {item.title}
                                                                </Link>
                                                            </h6>
                                                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                                <span className="post-on">
                                                                    {item.date}
                                                                </span>
                                                                <span className="post-by has-dot">
                                                                    {item.views} views
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                                                            <Link href={`/blog/${item.id}`} className="color-white">
                                                                <img
                                                                    src={`/assets/imgs/news/${item.img}`}
                                                                    alt=""
                                                                />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                                    <div className="widget-header-2 position-relative mb-30">
                                        <h5 className="mt-5 mb-30">
                                            Last comments
                                        </h5>
                                    </div>
                                    <div className="post-block-list post-module-2">
                                        <ul className="list-post">
                                            <li className="mb-30 wow fadeInUp animated">
                                                <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                                                    <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                        <Link href="/single" className="color-white">
                                                            <img
                                                                src="/assets/imgs/authors/author-2.jpg"
                                                                alt=""
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className="post-content media-body">
                                                        <p className="mb-10">
                                                            <Link href="/author">
                                                                <strong>
                                                                    David
                                                                </strong>
                                                            </Link>
                                                            <span className="ml-15 font-small text-muted has-dot">
                                                                16 Jan 2020
                                                            </span>
                                                        </p>
                                                        <p className="text-muted font-small">
                                                            A writer is
                                                            someone for whom
                                                            writing is more
                                                            difficult
                                                            than...
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mb-30 wow fadeInUp animated">
                                                <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                                                    <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                        <Link href="/single" className="color-white">
                                                            <img
                                                                src="/assets/imgs/authors/author-3.jpg"
                                                                alt=""
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className="post-content media-body">
                                                        <p className="mb-10">
                                                            <Link href="/author">
                                                                <strong>
                                                                    Kokawa
                                                                </strong>
                                                            </Link>
                                                            <span className="ml-15 font-small text-muted has-dot">
                                                                12 Feb 2020
                                                            </span>
                                                        </p>
                                                        <p className="text-muted font-small">
                                                            Striking pewter
                                                            studded
                                                            epaulettes
                                                            silver zips
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="wow fadeInUp animated">
                                                <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                                                    <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                        <Link href="/single" className="color-white">
                                                            <img
                                                                src="/assets/imgs/news/thumb-1.jpg"
                                                                alt=""
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className="post-content media-body">
                                                        <p className="mb-10">
                                                            <Link href="/author">
                                                                <strong>
                                                                    Tsukasi
                                                                </strong>
                                                            </Link>
                                                            <span className="ml-15 font-small text-muted has-dot">
                                                                18 May 2020
                                                            </span>
                                                        </p>
                                                        <p className="text-muted font-small">
                                                            Workwear bow
                                                            detailing a
                                                            slingback buckle
                                                            strap
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget widget_instagram wow fadeInUp animated">
                                    <div className="widget-header-2 position-relative mb-30">
                                        <h5 className="mt-5 mb-30">
                                            Instagram
                                        </h5>
                                    </div>
                                    <div className="instagram-gellay">
                                        <ul className="insta-feed">
                                            <li>
                                                <a
                                                    href="assets/imgs/thumbnail-3.jpg"
                                                    className="play-video"
                                                    data-animate="zoomIn"
                                                    data-duration="1.5s"
                                                    data-delay="0.1s"
                                                >
                                                    <img
                                                        className="border-radius-5"
                                                        src="/assets/imgs/news/thumb-1.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="assets/imgs/thumbnail-4.jpg"
                                                    className="play-video"
                                                    data-animate="zoomIn"
                                                    data-duration="1.5s"
                                                    data-delay="0.1s"
                                                >
                                                    <img
                                                        className="border-radius-5"
                                                        src="/assets/imgs/news/thumb-2.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="assets/imgs/thumbnail-5.jpg"
                                                    className="play-video"
                                                    data-animate="zoomIn"
                                                    data-duration="1.5s"
                                                    data-delay="0.1s"
                                                >
                                                    <img
                                                        className="border-radius-5"
                                                        src="/assets/imgs/news/thumb-3.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="assets/imgs/thumbnail-3.jpg"
                                                    className="play-video"
                                                    data-animate="zoomIn"
                                                    data-duration="1.5s"
                                                    data-delay="0.1s"
                                                >
                                                    <img
                                                        className="border-radius-5"
                                                        src="/assets/imgs/news/thumb-4.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="assets/imgs/thumbnail-4.jpg"
                                                    className="play-video"
                                                    data-animate="zoomIn"
                                                    data-duration="1.5s"
                                                    data-delay="0.1s"
                                                >
                                                    <img
                                                        className="border-radius-5"
                                                        src="/assets/imgs/news/thumb-5.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="assets/imgs/thumbnail-5.jpg"
                                                    className="play-video"
                                                    data-animate="zoomIn"
                                                    data-duration="1.5s"
                                                    data-delay="0.1s"
                                                >
                                                    <img
                                                        className="border-radius-5"
                                                        src="/assets/imgs/news/thumb-6.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    </>);
}
export default Author;