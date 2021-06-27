import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
export const Footer = () => {
    return (
        <section className = 'footer'>
            <div className = 'container'>
                <div className = 'info'>
                    <h1 className = 'title'>Minh Đăng Film</h1>
                    <span className = 'subtitle'>Web xem phim miễn phí</span>
                </div>
                <ul className = 'links'>
                    <li className = 'title-links'>Thể loại</li>
                    <li className ='link-item'>
                        <Link to = '/phimbo' className = 'link-links'>Phim bộ</Link>
                    </li>
                    <li className ='link-item'>
                        <Link to = '/phimle' className = 'link-links'>Phim lẻ</Link>
                    </li>
                    <li className ='link-item'>
                        <Link to = '/phimhoathinh' className = 'link-links'>Phim hoạt hình</Link>
                    </li>
                    <li className ='link-item'>
                        <Link to = '/phimchieurap' className = 'link-links'>Phim chiếu rạp</Link>
                    </li>
                </ul>
                <div className ='footer-socials'>
                    <a href = 'https://www.facebook.com/profile.php?id=100011710546224' target = 'blank'><i className="fab fa-facebook-f"></i></a>
                    <a href = 'https://twitter.com/Vng41977408' target = 'blank'><i className="fab fa-twitter"></i></a>
                    <a href = 'https://www.instagram.com/vuminhdang12/' target = 'blank'><i className="fab fa-instagram"></i></a>
                    <a href = 'https://www.youtube.com/channel/UCb3MqHh4OtHzZrXZ4YP8Z7A/about' target = 'blank'><i className="fab fa-youtube"></i></a>
                </div>
            </div>
            <p className = 'footer-copy'>© Dang. All right reserved</p>
        </section>
    )
}
