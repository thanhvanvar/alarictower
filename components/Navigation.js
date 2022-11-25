import React, {useEffect,useRef} from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {

    return (
        <>
            <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
                <div className="container">
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span/>
                        <span/>
                        <span/>
                    </button>
                    <Link className="navbar-brand text-brand" href="/">
                        <a>
                            <Image
                                src="/assets/img/logo-alaric.png"
                                alt="logo"
                                width={48}
                                height={70}
                                priority
                            />
                        </a>
                    </Link>

                    <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link  href="#section_four" scroll={false}><a className="nav-link">Tổng quan dự án</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link  href="#section_six" scroll={false}><a className="nav-link">Vị trí</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link  href="#section_eight" scroll={false}><a className="nav-link">Tiện ích</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link  href="#section_nine" scroll={false}><a className="nav-link">Mặt bằng</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link  href="#section_ten" scroll={false}><a className="nav-link">Video dự án</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link  href="#PTTT" scroll={false}><a className="nav-link">Phương thức thanh toán</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link  href="#section_eleven" scroll={false}><a className="nav-link">Tư vấn</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}