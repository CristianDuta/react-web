import './Contact.css';

const Contact = () => {
    return (
        <div>
        <div class="newsletter-subscribe">
        <div class="container">
            <div class="intro">
            <h2 class="text-center">Send us your email!</h2>
            <p class="text-center">Send us your email and we will contact you shortly to schedule a conversation.<br/>No worries we value your privacy.</p>
            </div>
            <div class="intro">
        <form class="form-inline" method="post">
            <div class="form-group">
        <input class="form-control" type="email" name="email" placeholder="Your Email"/>
            </div>
        <div class="form-group d-flex justify-content-center">
            <button class="btn btn-primary mt-5" type="submit">Subscribe </button>
            </div>
        </form>
        </div>
        </div>
    </div>
    </div>
    )
}

export default Contact;