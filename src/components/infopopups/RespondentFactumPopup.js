import React, { Component }from 'react';
import Help from './common/Help';
import {
    FILE_STEP_ONE_MSG, FILE_MULTIPLES_STEP_TWO_MSG, FILE_STEP_THREE_MSG
} from "../../helpers/constants";

class RespondentFactumPopup extends Component {

    constructor(props) {
        super(props);
        let contentMap = [
            {
                line: FILE_STEP_ONE_MSG,
                rows: [
                    { descriptionLink: {
                        URL: "https://www.courtofappealbc.ca/respondent-guidebook/1.9-write-your-argument?ct=t(step-index-link)",
                        URLName: "Factum"
                        }, times: "4 x",
                        docLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/CA12345_factum_respondent_Final.dotx",
                            URLName: "DOC"
                        },
                        pdfLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/CA12345_factum_appellant_respondent_Final.pdf",
                            URLName: "PDF"
                        }
                    },
                    { descriptionLink: {
                        URL: "https://www.courtofappealbc.ca/respondent-guidebook/1.10-the-appellant-may-serve-a-transcript-extract-book?ct=t(step-index-link)",
                        URLName: "* Optional - Transcript Extract Book" }, times: "4 x",
                        docLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/Form13.docx",
                            URLName: "DOC"
                        },
                        pdfLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/Form%2013.pdf",
                            URLName: "PDF"
                        }
                    },
                    { descriptionLink : {
                        URL: "https://www.courtofappealbc.ca/respondent-guidebook/1.8-the-appellant-serves-an-appeal-book?ct=t(step-index-link)",
                        URLName: "* Optional - Appeal Book"
                        }, times: "4 x",
                        docLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/Form%2012.docx",
                            URLName: "DOC"
                        },
                        pdfLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/Form%2012.pdf",
                            URLName: "PDF"
                        }
                    },
                ]
            },
            FILE_MULTIPLES_STEP_TWO_MSG,
            FILE_STEP_THREE_MSG
        ];

        this.sections = [{
            expandable: true,
            sectionHeading: "The Factum and Appeal Book",
            iconSrc: "/icons/icon-share.svg",
            iconClass: "info-modal-icon",
            deadlinePhrases: [{startWith: "You have  ", deadline: " 30 days ", endWith: " to file and serve your documents."}],
            lineHeight: '275px',
            contentMap: contentMap
        }, {
            expandable: true,
            sectionHeading: "The Transcript Extract Book",
            iconSrc :"icons/icon-info.svg",
            iconClass: "info-modal-icon",
            lineHeight: '73px',
            content: ["If you are served with the appellant's Transcript Extract Book, you do not have to respond to this document."]
        }, {
            expandable: true,
            sectionHeading: "The Certificate of Readiness",
            iconSrc :"icons/icon-info.svg",
            iconClass: "info-modal-icon",
            lineHeight: '240px',
            content: ["If you are not served a Certificate of Readiness within 7 days of receiving the Factum, and would like to continue with the appeal, then you are responsible for filing and serving the Certificate of Readiness."],
            contentMap: [
                {
                    line: FILE_STEP_ONE_MSG,
                    rows: [
                        { descriptionLink: {
                            URL: "https://www.courtofappealbc.ca/respondent-guidebook/1.12-if-the-appellant-does-not-prepare-a-certificate-of-readiness?ct=t(sidebar-link)",
                            URLName: "The Certificate of Readiness"
                            }, times: "4 x",
                            docLink: {
                                URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/Form%2014.docx",
                                URLName: "DOC"
                            },
                            pdfLink: {
                                URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/fillable_forms/civil_rules_forms/Form14.pdf",
                                URLName: "PDF"
                            }
                        }
                    ]
                },
                FILE_MULTIPLES_STEP_TWO_MSG,
                FILE_STEP_THREE_MSG
            ]
        }, {
            expandable: true,
            sectionHeading: "A Reply to your Factum",
            iconSrc :"icons/icon-info.svg",
            iconClass: "info-modal-icon",
            lineHeight: '73px',
            content: ["If you are served with the appellant's Reply to your Factum, you do not have to respond to this document."]
        }, {
            expandable: true,
            sectionHeading: "A Notice of Hearing",
            iconSrc :"icons/icon-calendar.svg",
            iconClass: "info-modal-icon",
            content: ["You should be served a Notice of Hearing from the appellant, which will tell you the date and length of your hearing." +
            "  However, if you were the one who submitted the Certificate of Readiness, please click the link for more information.",
                {
                    URL: "https://www.courtofappealbc.ca/respondent-guidebook/2.3-schedule-the-appeal-for-hearing?ct=t(step-index-link)",
                    URLName: "Schedule the appeal for hearing"}]
        }]
    }

    render() {
        let sections = this.props.getSections(this.sections);
        return (
            <div id="info-modal" className="modal" style={{display: 'block'}} >
                <div className="info-modal-title ">
                    <span id="close-modal" onClick={this.props.close}>&times;</span>
                    The Factum and Appeal Book
                </div>
                <div className="info-modal-content">
                    <div className="info-modal-primary-heading row">
                        <div className="col-lg-offset-1 col-md-11 col-sm-11 col-lg-11 col-md-offset-1 col-sm-offset-1"> Were you served with any of the following documents?</div>
                    </div>
                    {sections}
                    <Help
                        URL="https://www.courtofappealbc.ca/appellant-guidebook"
                        URLName="Visit: SRL Guidebook"
                    />
                </div>

            </div>
        );
    }

}
export default RespondentFactumPopup;