<?php

namespace App\Http\Controllers;

use App\DTOs\CreateContactDTO;
use App\Http\Resources\ContactResource;
use App\Models\Contact;
use App\Services\ContactService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Throwable;

class ContactController extends Controller
{
    public function createContact(Request $request)
    {
        try {
            $contact = ContactService::new()->createContact(
                CreateContactDTO::new()->fromArray([
                    'name' => $request->name,
                    'email' => $request->email,
                    'phone' => $request->phone,
                    'message' => $request->message,
                    'type' => $request->type,
                    'data' => ['forType' => $request->forType,
                        'forId' => $request->forId,]
                ])
            );

            return $this->returnSuccess($request, $contact);
        } catch (Throwable $th) {
            //throw $th;
            return $this->returnFailed($request, $th);
        }
    }
    public function respondToContact(Request $request)
    {
        try {
            $contact = ContactService::new()->respondToContact(
                CreateContactDTO::new()->fromArray([
                    'user' => $request->user(),
                    'contact' => Contact::find($request->contactId),
                    'title' => $request->title,
                    'message' => $request->message,
                ])
            );

            return $this->returnSuccess($request, $contact);
        } catch (Throwable $th) {
            //throw $th;
            return $this->returnFailed($request, $th);
        }
    }

    public function getContacts(Request $request)
    {
        try {
            return ContactService::new()->getContacts(
                CreateContactDTO::new()->fromArray([
                    'name' => $request->name,
                    'email' => $request->email,
                    'phone' => $request->phone,
                    'message' => $request->message,
                ])
            );
        } catch (Throwable $th) {
            //throw $th;
            return $this->returnFailed($request, $th);
        }
    }
    
    private function returnFailed(Request $request, Throwable $th)
    {
        $message = $th->getCode() == 500 ? "Something unfortunate happened. Please try again shortly." : $th->getMessage();   
        ds($th);

        if ($request->acceptsJson()) throw new \Exception($message);

        return Redirect::back()->with('message', $message);
    }

    public function returnSuccess(Request $request, Contact $contact)
    {
        $contact = new ContactResource($contact);

        if ($request->acceptsJson()) return $contact;

        return Redirect::back()->with('contact', $contact);
    }
}
