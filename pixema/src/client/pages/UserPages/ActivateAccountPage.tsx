import React, { useEffect } from "react";
import {
    Wrapper,
    ActivationText,
    PrimaryButtonWrapper,
} from "src/client/pages/UserPages/styles";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import KeyButton from "src/client/components/Buttons/KeyButton/KeyButton";
import { useAction } from "src/store/hooks/useAction";

const ActivateAccountPage = () => {
    const { uid, token } = useParams();

    const { activateAccountAsync } = useAction();

    useEffect(() => {
        if (uid && token) {
            activateAccountAsync(uid!, token!);
        }
    }, [uid, token]);

    return (
        <Wrapper>
            <ActivationText>
                {uid && token ? "Success!" : "Please, check out your email!"}
            </ActivationText>
            {uid && token && (
                <Link to="/main">
                    <PrimaryButtonWrapper to="/main">
                        <KeyButton>Go to home!</KeyButton>
                    </PrimaryButtonWrapper>
                </Link>
            )}
        </Wrapper>
    );
};

export default ActivateAccountPage;